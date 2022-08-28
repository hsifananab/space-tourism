import { NavLink } from 'react-router-dom';

import styles from './Menu.module.css';

const Menu = props => {
  return (
    <ul className={`${styles.Menu} + ${props.minimal && styles.Menu_minimal}`}>
      {props.base.map(item => (
        <NavLink
          style={({ isActive }) =>
            isActive
              ? props.minimal
                ? {
                    borderBottom: '3px solid var(--primary)',
                    paddingBottom: '12px',
                  }
                : {
                    borderBottom: '3px solid var(--primary)',
                    paddingBottom: '35px',
                  }
              : undefined
          }
          className={styles.Menu__item}
          key={item.id}
          to={item.path}
          onClick={e => {
            props.onClickHandler(e.target.textContent);
          }}
        >
          {props.numbers && (
            <span className={styles.Menu__item_bold}>0{item.id}</span>
          )}
          {item.label}
        </NavLink>
      ))}
    </ul>
  );
};

export default Menu;
