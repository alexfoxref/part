import React, { useRef, useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import GridCol from 'arui-feather/grid-col';
import GridRow from 'arui-feather/grid-row';
import Button from 'arui-feather/button';
import Popup from 'arui-feather/popup';
import Breadcrumbs from '../../../components/Common/Breadcrumbs';
import SpecialistServices from '../../../components/Site/SpecialistServices';
import SpecialistImg from '../../../theme/images/Ladushki/Горбицкая Марина Сергеевна.jpg';
import HowWork from '../../../components/Site/HowWork';
// import RequestForm from '../../../components/Site/Forms/RequestForm';
import Footer from '../../../components/Common/Footer';
import { specialistBreadcrumbs } from '../../../core/utils/testData';
import './styles.scss';

/**
 * Specialist
 */
class Specialist extends React.Component {

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
          <title>Specialist</title>
          <meta name="description" content="Specialist" />
          <meta name="keywords" content="Specialist" />
        </Helmet>
        <section className="section breadcrumbs">
          <Breadcrumbs items={specialistBreadcrumbs} />
        </section>
        <section className="section section_fullwidth">
          <div className="specialist">
            <GridRow>
              <GridCol width={{ mobile: 0, tablet: 6 }} />
              <GridCol width={{ mobile: 12, tablet: 6 }}>
                <div className="specialist-about">
                  <h1>Горбицкая<br /> Марина Сергеевна
                  </h1>
                  <div className="specialist-expir">Врач высшей категории</div>
                  <div className="specialist-expir">Акушер-гинеколог</div>
                  <div className="specialist-more">
                    <Button
                      ref={(target) => { this.refTarget = target; }}
                      size="m"
                      onClick={() => this.setState({ isOpenPopup: !this.state.isOpenPopup })}
                      className="button button_link"
                    >
                    Подробнее...
                    </Button>
                    <Popup
                      ref={(popup) => { this.refPopup = popup; }}
                      visible={this.state.isOpenPopup}
                      onClickOutside={() => this.setState({ isOpenPopup: false })}
                      mainOffset={10}
                    >
                      <div className="specialist-more-popup">
                      Сведения об образовании: Архангельский государственный медицинский институт, год окончания 1980, диплом ЖВ 693226 от 21.06.1980 г., св-во о прохождении интернатуры №693226, специальность "акушерство и гинекология". Обучение, КПК: ГБОУ ВПО СЗМУ им. И.И. Мечникова (г.Санкт-Петербург), ГБОУ  ДПО "Казанская государственная медицинская академия" Минздрава  России, Кировская гос. мед. академия, СГМУ Министерства здравоохранения РФ (г.Архангельск)
                      </div>
                    </Popup>
                  </div>
                  <div className="specialist-button">
                    <Button className="button button_default">Записаться</Button>
                  </div>
                </div>
              </GridCol>
            </GridRow>
          </div>
        </section>
        <section className="section">
          <h2>О враче</h2>
          <GridRow>
            <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }}>
              <p>
              Сведения об образовании: Архангельский государственный медицинский институт, год окончания 1980, диплом ЖВ 693226 от 21.06.1980 г., св-во о прохождении интернатуры №693226, специальность "акушерство и гинекология". Обучение, КПК: ГБОУ ВПО СЗМУ им. И.И. Мечникова (г.Санкт-Петербург), ГБОУ  ДПО "Казанская государственная медицинская академия" Минздрава  России, Кировская гос. мед. академия, СГМУ Министерства здравоохранения РФ (г.Архангельск)
              </p>
            </GridCol>
            <GridCol width={{ mobile: 12, table: 6, desktop: 6 }}>
              <img className="specialist-image" src={SpecialistImg} alt="" />
            </GridCol>
          </GridRow>
        </section>
        <section className="section">
          <SpecialistServices items={[]} />
        </section>
        <section className="section">
          <HowWork />
        </section>
        {/* <section className="section section_fullwidth">
          <RequestForm formType="specialist" />
        </section> */}
        <Footer />
      </>
    );
  }
}

export default Specialist;
