import { useState } from 'react';
import { getDestination, getDestinations } from '../../destinations';
import Menu from '../Header/Menu/Menu';
import styles from './Destinations.module.css';

const Destinations = () => {
  const [destination, setDestination] = useState('moon');

  const destinations = getDestinations();

  const setDestinationHandler = value => {
    setDestination(value);
  };

  const currentDestination = getDestination(destination);
  console.log(currentDestination);

  console.log(destination);

  return (
    <div className={styles.Destinations}>
      <div className={styles.Destinations__container}>
        <h5 className="section-title">
          <span>01</span>
          Pick your destination
        </h5>
        <div className={styles.Destinations__inner}>
          <div className={styles.Destinations__item}>
            <img
              src={require(`../../assets/img/destination/image-${destination}.png`)}
              alt={destination}
            />
          </div>
          <div className={styles.Destinations__item}>
            <Menu
              base={destinations}
              numbers={false}
              minimal={true}
              onClickHandler={setDestinationHandler}
            />
            <div className={styles.Destinations__content}>
              <h2 className={styles.Destinations__title}>
                {currentDestination.label}
              </h2>
              <p className={styles.Destinations__text}>
                {currentDestination.desc}
              </p>
              <div className={styles.Destinations__stats}>
                <div className={styles.Destinations__stats_item}>
                  <div className={styles.Destinations__stats_item_title}>
                    avg. distance
                  </div>
                  <div className={styles.Destinations__stats_item_content}>
                    {currentDestination.distance}
                  </div>
                </div>
                <div className={styles.Destinations__stats_item}>
                  <div className={styles.Destinations__stats_item_title}>
                    est. travel time
                  </div>
                  <div className={styles.Destinations__stats_item_content}>
                    {currentDestination.time}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
