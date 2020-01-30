import React from 'react';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import HowWorkImage from '../../../theme/images/how-work.svg';
import './styles.scss';

/**
 * How work
 */
export default function HowWork() {
  return (
    <div className="how_work">
      <h2 className="how_work-title">О нас</h2>
      <GridRow>
        <GridCol width={{ mobile: 12, tablet: 6 }}>
          <img className="how_work-image" src={HowWorkImage} alt="" />
        </GridCol>
        <GridCol width={{ mobile: 12, tablet: 6 }}>
          <div className="how_work-content">
            <p className="bold18">
              Наша клиника имеет богатую историю:
            </p>
            <p>
              компьютер с подключением к интернету и веб-камера. Наша система соединяет ученика
              и преподавателя в максимально удобных для них условиях. Занятие проходит на сайте при помощи специального сервиса - виртуальной классной комнаты.
            </p>
            <p className="bold18">
              Вам не надо ехать издалека - наша клиника имеет широкую сеть филиалов!
            </p>
          </div>
        </GridCol>
      </GridRow>
    </div>
  );
};
