import React from 'react';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Faq from '../../../theme/images/faq.svg';
import './styles.scss';
import Faphone from '../../../theme/images/fa-phone.png';

/**
 * Footer
 */
export default function Footer() {
  return (
    <div className="footer_wrapper">
      <footer className="footer">
        <GridRow>
          <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }}>
            <div className="footer-first">МОЕ ОБРАЗОВАНИЕ</div>
            Проект (год, лицензия и т.п.)
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }}>
            <div className="footer-center">
              <div className="footer-second">
                <img src={Faphone} className="fa-pic" alt="" />
                <a href="tel:+81234567891">8 (123) 456-78-91</a>
              </div>
              <div className="footer-second">
                <img src={Faphone} className="fa-pic" alt="" />
                <a href="tel:+81987653412">8 (198) 765-34-12</a>
              </div>
            </div>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }}>
            <div className="footer-faq">
              <img src={Faq} alt="" />
            </div>
            <div className="footer-third">
              <p>Остались вопросы?</p>
              <p>Задайте их нам<b><a href="#">здесь</a></b>
              </p>
            </div>
          </GridCol>
        </GridRow>
      </footer>
    </div>
  );
}
