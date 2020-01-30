import React from 'react';
import Type from 'prop-types';
import { NavLink } from 'react-router-dom';
import Plate from 'arui-feather/plate';
import Button from 'arui-feather/button';
import './styles.scss';

/**
 * Specialist Block
 */
export default function SpecialistBlock({ specialist }) {
  const name = specialist.title;
  const fio = name.split(' ');
  return (
    <Plate className="specialist-block">
      <NavLink className="link" to="/specialist">
        <img className="specialist-image" src={specialist.photo} alt="" />
      </NavLink>
      <div className="specialist_skills-wrap">
        <h3 className="specialist_skills-name">
          <NavLink className="link link_third" to="/specialist">{fio[0]}<br />{fio[1]} {fio[2]}</NavLink>
        </h3>
        <p className="specialist_skills-subject">Специализация</p>
        <ul className="specialist-skill">
          {specialist.spec.map(item => <li key={item.sbj}>{item.sbj.slice(0, 25)+"..."}</li>)}
        </ul>
        <p className="specialist_skills-subject">Филиал</p>
        <ul className="skills-place">
          {specialist.spec.map(item => (
            <li key={item.place}>
              <p>{item.place}</p>
            </li>
          ))}
        </ul>
      </div>
      <NavLink className="link link_third" to="/specialist">
        <div className="button-cntr">
          <Button className="button button_default">Записаться</Button>
        </div>
      </NavLink>
    </Plate>
  );
}

SpecialistBlock.propTypes = {
  specialist: Type.object.isRequired,
};
