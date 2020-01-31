import React from 'react';
import Helmet from 'react-helmet';
import Button from 'arui-feather/button';
import GridCol from 'arui-feather/grid-col';
import GridRow from 'arui-feather/grid-row';
import { NavLink } from 'react-router-dom';
import Breadcrumbs from '../../../components/Common/Breadcrumbs';
// import RequestForm from '../../../components/Site/Forms/RequestForm';
import Specialist from '../../../theme/images/Lada/Гилибранд Лариса Аркадьевна.jpg';
import Footer from '../../../components/Common/Footer';
import { medicalServiseBreadcrumbs } from '../../../core/utils/testData';
import './styles.scss';

/**
 *  Medical Servise
 */
export default function MedicalServise() {
  return (
    <>
      <Helmet>
        <title>Medical Servise</title>
        <meta name="description" content="Medical Servise"/>
        <meta name="keywords" content="Medical Servise"/>
      </Helmet>
      <section className="section breadcrumbs">
        <Breadcrumbs items={medicalServiseBreadcrumbs}/>
      </section>
      <section className="section section_fullwidth">
        <div className="medicalServise">
          <div className="medicalServise-wrap">
            <div className="medicalServise-inner">
              <h1 className="medicalServise-h1">УЗИ органов малого таза</h1>
              <div className="medicalServise-intro">УЗИ органов малого таза, маммологическое обследование, акушерское УЗИ</div>
              <div className="medicalServise-txt">
                <p><strong>Филиал:</strong> "ЛадаМед" на ул. Сухаревской, 42</p>
                <p><strong>Часы приема:</strong> каждый будний день с 10 до 15 </p>
                <p><strong>Принимают:</strong> Главный врач МЦ "ЛадаМед", Врач высшей категории, Врач ультразвуковой диагностики</p>
              </div>
              <div className="medicalServise-btn">
                <Button className="button button_default">Записаться</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <h2>О процедуре</h2>
        <p>Курс предназначен для студентов, преподавателей, психологов, социальных работников, педагогов допополнительного образования, культурологов и всех специалистов, интересующихся развитием творческих ресурсов личности.</p>
        <h3 className="medicalServise-h3">Как подготовиться:</h3>
        <ol className="medicalServise-ol">
          <li>1. Формирование у слушателей системы представлений о позитивном мировосприятии и благополучии за счет собственных творческих и личностных ресурсов</li>
          <li>2. Практическое освоение методов работы с художественными образами межличностного взаимодействия в произведениях русской живописи</li>
          <li>3. Приобретение личного опыта в рамках данного направления</li>
        </ol>
        <p>Впервые в России предлагается изучение ситуаций межличностного взаимодействия на материале произведений живописи «Умные отношения», в контексте позитивного подхода – авторская методика Ширяк М.С. сертифицирована в Сорбонне (Париж). В ходе обучения слушатели получат знания о художественных образах межличностных отношений, об особенностях поведения людей в различных жизненных ситуациях, навыки расшифровки элементов поведения в произведениях портретной живописи, оценки ситуации на
          основании выделения поведенческих элементов персонажей, понимание отличительных признаков различных моделей межличностного взаимодействия на основе развития креативности -воображения и ассоциативного мышления.</p>
        <ul className="medicalServise-ul">
          <li><span>Совершенствование навыков считывания и расшифровки элементов ситуации</span></li>
          <li><span>Оценка ситуации на основании выделения поведенческих элементов персонажей</span></li>
          <li><span>Понимание отличительных признаков различных моделей межличностного взаимодействия</span></li>
          <li><span>Развитие воображения и ассоциативного мышления - ресурсов эмпатического понимания межличностного взаимодействия</span></li>
        </ul>
      </section>
      <section className="section">
        <h2>Кто принимает</h2>
        <GridRow>
          <GridCol width={{ mobile: 12, tablet: 3 }} className="text-center">
            <img className="specialist-image" src={Specialist} alt="Врач"/>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 9 }}>
            <div className="specialist-content">
              <h3 className="specialist-h3">Гилибранд Лариса Аркадьевна</h3>
              <p>Главный врач МЦ "ЛадаМед", Врач высшей категории, Врач ультразвуковой диагностики
 
                Сведения об образовании: Ижевская государственная медициснкая академия, гд окончания 1985
 
                Обучение, КПК: Московская мед. академия им. И.М. Сеченова, Кировская гос. мед.академия, ГОУ ДПО СПБ МАПО Росздрава,  ГБОУ ВПО ИГМА (г.Ижевск), ГБОУ ВПО СГМУ (г.Архангельск), Ростовский НИИ акушерства и педиатрии, Педиатрическая мед. академия (г.Санкт-Петербург), Научный центр им. А.Н. Бакулева РАМН (г.Москва), ГАУЗ "Межрегиональный КДЦ" (г.Казань), ГБОУ ДПО "Казанская мед.академия"</p>
              <NavLink className="link link_third" to="/specialist">
              <div className="specialist-button">
                <Button className="button button_secondary">Записаться</Button>
              </div>
              </NavLink>
            </div>
          </GridCol>
        </GridRow>
      </section>
      {/* <section className="section section_fullwidth">
        <RequestForm formType="medicalServise"/>
      </section> */}
      <Footer/>
    </>
  );
}
