import React, { useState } from 'react';
import Slider from 'react-slick';
// import Carousel from 'react-bootstrap/Carousel';

import styles from './Crew.module.css';
import { getCrew } from '../../crew';
import SimpleSlider from './CrewSlider/CrewSlider';

const Crew = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => setIndex(selectedIndex);

  const crew = getCrew();

  const settings = {
    dots: true,
    infinity: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.Crew}>
      <div className={styles.Crew__container}>
        <h5 className="section-title">
          <span>02</span>
          Meet your crew
        </h5>
        <div className={styles.Crew__inner}>
          <SimpleSlider />
        </div>
      </div>
    </div>
  );
};

export default Crew;
