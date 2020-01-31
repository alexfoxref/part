import React from 'react';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Button from 'arui-feather/button';
import Input from 'arui-feather/input';
import PhoneInput from 'arui-feather/phone-input';
import CheckBox from 'arui-feather/checkbox';
import Link from 'arui-feather/link';
import './styles.scss';
import { doctors } from '../../../../core/utils/testData';
import * as moment from 'moment';
import 'moment/locale/ru';
import TextField from '../../TextField';
import Doctor from '../../Doctor/';
import TimerList from '../../TimerList';

/**
 * Request form
 */
export default class RequestForm extends React.Component {

  state = {
    step: 1,
    searchValue: '',
    docs: [],
    week: [],
    daySelected: null,
    docSelected: null,
    timeSelected: null,
    fio: '',
    phone: '',
    fioSent: false
  }

  componentDidMount() {
    moment.locale('ru')
    const startDay = moment()
    const endDay = startDay.clone().add(6, 'day')
    const date = startDay.clone().subtract(1, 'day')
    const week = []
    while (date.isBefore(endDay, 'day')) {
      const currentDay = date.add(1, 'day').clone()
      week.push({ day: currentDay })
    }
    this.setState({
      docs: doctors,
      week,
    })
  }

  handleSearchChange = e => {
    const val = e.target.value.trim()
    if (val) {
      this.setState({ searchValue: val })

      const docs = doctors.filter(doc =>
        doc.name.toLowerCase().includes(val.toLowerCase())
      )
      this.setState({ docs })
    } else {
      this.setState({ searchValue: '', docs: doctors })
    }
  }

  handleDaySelected = (docSelected, daySelected) => {
    this.setState({ docSelected, daySelected, step: 2 })
  }

  handleTimeSelect = (timeSelected) => {
    this.setState({ timeSelected, step: 3 })
  }

  handlePhoneValue = value => {
    this.props.setFieldValue('phone', value);
    this.setState({ phone: this.props.values.phone })
  }
  handleFioValue = value => {
    this.props.setFieldValue('name', value);
    this.setState({ fio: this.props.values.name })
  }

  render () {
    const { values, errors, touched, handleSubmit, handleBlur, isSubmitting } = this.props;

    const doctorsList = this.state.docs.map(doctor => {
      return (
        <Doctor
          {...doctor}
          week={this.state.week}
          key={doctor.id}
          handleDaySelected={this.handleDaySelected}
        />
      )
    });

    return (

      <div className="section">
        <h1>Запись на прием к врачу</h1>
        {this.state.step === 1 && (
          <div className="step1">
            <div className="header-request">
              <TextField
                value={this.state.searchValue}
                onChange={this.handleSearchChange}
              />
              <p>
                Неделя с <strong>{moment().format('LL')}</strong> по{' '}
                <strong>
                  {moment()
                    .add(6, 'day')
                    .format('LL')}
                </strong>
              </p>
            </div>

            {doctorsList}
          </div>
        )}
        {this.state.step === 2 && (
          <div className="step2">
            <p>Пожалуйста выберите время</p>
            <TimerList date={this.state.daySelected} onSelect={this.handleTimeSelect} />
          </div>
        )}
        {this.state.step === 3 && (
          <div className="step3">
            <p>Вы сделали заявку на посещение врача: <strong>
              {doctors[this.state.docSelected].name}
            </strong> ({doctors[this.state.docSelected].specialisation})</p>
            <p>Дата посещения: <strong>{this.state.timeSelected.format('LL')}</strong> </p>
            <p>Время посещения: <strong>{this.state.timeSelected.format('LT')}</strong> </p>

            {!this.state.fioSent && <form onSubmit={handleSubmit} className="form-request">
              <h2>Укажите свои данные для заявки</h2>
                <GridRow>
                  <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="form-field">
                    <label htmlFor="name" className="info-group-label">ФИО</label>
                    <Input
                      id="name"
                      placeholder="ФИО"
                      value={values.name}
                      onChange={this.handleFioValue}
                      onBlur={handleBlur}
                      width="available"
                      error={errors.name && touched.name && (<span>{errors.name}</span>)}
                      disabled={isSubmitting}
                      className="info-group-input"
                    />
                  </GridCol>
                </GridRow>
                <GridRow>
                  <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="form-field">
                    <label htmlFor="phone" className="info-group-label">Телефон</label>
                    <PhoneInput
                      id="phone"
                      placeholder="Номер телефона"
                      value={values.phone}
                      onChange={this.handlePhoneValue}
                      onBlur={handleBlur}
                      width="available"
                      error={errors.phone && touched.phone && (<span>{errors.phone}</span>)}
                      disabled={isSubmitting}
                      className="info-group-input"
                      // mask='+7 (111) 111 11 11'
                    />
                  </GridCol>
                </GridRow>

              <Button type="submit" onClick={() => this.setState({ fioSent: !this.state.fioSent })} className={values.formType === 'specialist' ? 'button button_secondary' : 'button button_default'} disabled={isSubmitting}>
                Отправить заявку
              </Button>
            </form>}

            {this.state.fioSent && <>
              <p>Ваша фамилия: <strong>{this.state.fio}</strong></p>
              <p>Ваш номер телефона: <strong>{this.state.phone}</strong></p>
            </>}
          </div>
        )}

      </div>
    );
  }
}
