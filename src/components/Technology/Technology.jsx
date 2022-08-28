import Tabs from './TabComponent/Tabs';
import styles from './Technology.module.css';

const Technology = () => {
  return (
    <div className={styles.Technology}>
      <div className={styles.Technology__container}>
        <h5 className="section-title">
          <span>03</span>
          SPACE LAUNCH 101
        </h5>
        <Tabs />
      </div>
    </div>
  );
};

export default Technology;
