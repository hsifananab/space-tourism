import Menu from './Menu/Menu';
import { ReactComponent as Logo } from '../../assets/img/shared/logo.svg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className="logo">
        <Logo />
      </div>
      <Menu />
    </div>
  );
};

export default Header;
