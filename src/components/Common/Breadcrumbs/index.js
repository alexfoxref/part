import React from 'react';
import Type from 'prop-types';
import classNames from 'classnames';
import Link from 'arui-feather/link';
import './styles.scss';

/**
 * Breadcrumbs
 */
export default function Breadcrumbs({ items = [], className }) {
  const classes = classNames('breadcrumbs', className);
  return (
    <div className={classes}>
      <ul className="list">
      {items.map((item) => (
        <li key={item.title}>
          {item.link
            ? <Link pseudo className="link link_secondary" key={item.link} to={item.link}>{item.title}</Link>
            : <span key={item.link}>{item.title}</span>
          }
        </li>
      ))}
      </ul>
    </div>
  );
};

Breadcrumbs.propTypes = {
  items: Type.array.isRequired,
  className: Type.string,
};

Breadcrumbs.defaultProps = {
  className: '',
};
