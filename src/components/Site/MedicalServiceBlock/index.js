import React from 'react';
import Type from 'prop-types';
import Plate from 'arui-feather/plate';
import Button from "arui-feather/button";
import { NavLink } from 'react-router-dom';
import './styles.scss';

/**
 * medicalService block
 */
export default function MedicalServiceBlock({ medicalService }) {
  return (
    <Plate className="medicalService_block">
      <div className="medicalService_skills">
        <NavLink className="link link_third" to="/medicalService"><img className="medicalService-image" src={medicalService.photo} alt="мед услуга" /></NavLink>
        <div className="medicalService_descr-wrap">
          <h3 className="medicalService_descr-name">
            {medicalService.title}
          </h3>
          <p className="medicalService_descr-subject">Направление</p>
          {medicalService.subjects}
          <p className="medicalService_descr-subject">Описание</p>
          <p className="medicalService_descr-descr">{medicalService.descr}</p>
        </div>
        <NavLink className="link link_third" to="/medicalService">
          <div className="button-cntr">
            <Button className="button button_default">Записаться</Button>
          </div>
        </NavLink>
      </div>
    </Plate>
  );
}

MedicalServiceBlock.propTypes = {
  medicalService: Type.object.isRequired,
};
