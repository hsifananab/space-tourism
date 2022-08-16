import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.Home}>
      <div className={styles.Home__item}>
        <h5 className={styles.Home__suptitle}>SO, YOU WANT TO TRAVEL TO</h5>
        <h1 className={styles.Home__title}>SPACE</h1>
        <p className={styles.Home__text}>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className={styles.Home__item}>
        <button className={styles.Home__explore}>
          {' '}
          <h4>Explore</h4>
        </button>
      </div>
    </div>
  );
};

export default Home;
