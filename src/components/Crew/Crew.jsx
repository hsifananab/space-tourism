import React, { useState } from 'react';

// import Carousel from 'react-bootstrap/Carousel';

import styles from './Crew.module.css';
import { getCrew } from '../../crew';

const Crew = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => setIndex(selectedIndex);

  const crew = getCrew();

  return (
    <div className={styles.Crew}>
      <div className={styles.Crew__container}>
        {/* <h5 className="section-title">
          <span>02</span>
          Meet your crew
        </h5> */}
        <div className={styles.Crew__inner}>
          <h4>in progress...</h4>
        </div>
      </div>
    </div>
  );
};

export default Crew;
