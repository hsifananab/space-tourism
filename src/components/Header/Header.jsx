import Menu from './Menu/Menu';
import { ReactComponent as Logo } from '../../assets/img/shared/logo.svg';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { getScreens } from '../../screens';

const Header = () => {
  const screens = getScreens();
  return (
    <div className={styles.Header}>
      <NavLink to="/home" className="logo">
        <Logo />
      </NavLink>
      <Menu base={screens} numbers={true} />
    </div>
  );
};

export default Header;
