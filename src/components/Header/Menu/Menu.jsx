import getScreens from '../../../screens';

import styles from './Menu.module.css';

const Menu = () => {
  const screens = getScreens();
  return (
    <ul className={styles.Menu}>
      {screens.map(screen => (
        <li key={screen.id} className={styles.Menu__item}>
          <span className={styles.Menu__item_bold}>0{screen.id}</span>{' '}
          {screen.label}
        </li>
      ))}
    </ul>
  );
};

export default Menu;
