import React, { useState } from 'react';
import Type from 'prop-types';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Button from 'arui-feather/button';
import ExpansionPanel from '../../Common/ExpansionPanel';
import './styles.scss';

/**
 * specialist services
 */
const SpecialistServices = ({ items = [] }) => {

  const [openPanelNumber, setOpenPanelNumber] = useState(0);

  const handleClickExpand = (panelNumber) => {
    const newOpenPanelNumber = openPanelNumber !== panelNumber ? panelNumber : 0;
    setOpenPanelNumber(newOpenPanelNumber);
  };

  return (
    <div className="specialistc">
      <h2>Оказываемые услуги </h2>
      <ExpansionPanel
        className="specialistc-item"
        title="УЗИ органов малого таза"
        isExpanded={openPanelNumber === 1}
        onClickExpand={() => handleClickExpand(1)}
        content={
          <div>
            <p>
              Описание процедуры и места
              Курс фокусируется на самых проблемных моментах в русской грамматике.
              Курс учит не только грамотной письменной речи, но и устному языку. Слушатели разберут самые распространенные орфографические и пунктуационные ошибки: использование разных знаков препинания, написание суффиксов, сложных слов с частицами и предлогами-приставками, слитное и раздельное написание слов.
            </p>
            <GridRow>
              <GridCol width={{
                mobile: 12,
                tablet: 4
              }}>
                <h3 className="specialistc-h3">Ваши шаги</h3>
                <ul className="specialistc-ul">
                  <li><span>Приходите</span></li>
                  <li><span>Проходите процедуру быстро</span></li>
                  <li><span>Получаете заключение врача</span></li>
                </ul>
              </GridCol>
              <GridCol width={{
                mobile: 12,
                tablet: 4
              }}>
                <h3 className="specialistc-h3">Сколько длится</h3>
                <ul className="ul-without">
                  <li>30 минут</li>
                </ul>
              </GridCol>
              <GridCol width={{
                mobile: 12,
                tablet: 4
              }}>
                <h3 className="specialistc-h3">Адрес филиала</h3>
                <div className="price-course">Каширское шоссе 31</div>
                <div className="specialistc-button">
                  <Button variant="contained" className="button button_default">
                    Записаться
                  </Button>
                </div>
              </GridCol>
            </GridRow>
          </div>
        }
      />
    </div>
  )
};

SpecialistServices.propTypes = {
  items: Type.array.isRequired,
};

export default SpecialistServices;
