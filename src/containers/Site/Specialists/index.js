import React from 'react';
import Helmet from 'react-helmet';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Button from 'arui-feather/button';
import Popup from 'arui-feather/popup';
import Link from 'arui-feather/link';
import Breadcrumbs from '../../../components/Common/Breadcrumbs';
import SpecialistBlock from '../../../components/Site/SpecialistBlock';
import ChevronBottom2 from '../../../theme/images/chevronBottom2.svg';
import Footer from '../../../components/Common/Footer';
import { specialists, specialistsBreadcrumbs } from '../../../core/utils/testData';
import './styles.scss';

/**
 *  Specialists
 */
export default class Specialists extends React.Component {

  state = {
    isOpenPopup: false,
  };

  refPopup;

  refTarget;

  componentDidMount() {
    this.refPopup.setTarget(this.refTarget.control);
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Specialists</title>
          <meta name="description" content="Specialists" />
          <meta name="keywords" content="Specialists" />
        </Helmet>
        <section className="section breadcrumbs">
          <Breadcrumbs items={specialistsBreadcrumbs} />
        </section>
        <section className="section">
          <div className="select-subject">
            Выбрать специализацию
            <Button
                ref={(target) => { this.refTarget = target; }}
                size="m"
                onClick={() => this.setState({ isOpenPopup: !this.state.isOpenPopup })}
                className="button button_link"
              >
                <img
                  className="select-subject-img"
                  src={ChevronBottom2}
                  alt=""
                />
            </Button>
              <Popup
                ref={(popup) => { this.refPopup = popup; }}
                visible={this.state.isOpenPopup}
                onClickOutside={() => this.setState({ isOpenPopup: false })}
                mainOffset={10}
              >
                <div className="medicalService-more-popup">
                  <ul>
                    <li>УЗИ</li>
                    <li>Планирование беременности</li>
                    <li>Консультация</li>
                    <li>Эхокардиография</li>
                    <li>Приём детей</li>
                  </ul>
                  <Link pseudo>Подробнее...</Link>
                </div>
              </Popup>
          </div>
          <GridRow>
            {specialists.map(specialist => (
              <GridCol key={specialist.title} width={{ mobile: 12, tablet: 6, desktop: 4 }}>
                <SpecialistBlock specialist={specialist} />
              </GridCol>
            ))}
          </GridRow>
          <div className="button-center m-t30">
            <Button className="button button_secondary">Показать ещё</Button>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}
