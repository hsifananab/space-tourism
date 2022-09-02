// import React, { Component } from 'react';
// import Slider from 'react-slick';
// import { getCrew } from '../../../crew';

import styles from './CrewSlider.module.css';

// const CrewSlider = () => {
//   const crew = getCrew();
//   const settings = {
//     // className: 'CrewSlider',
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
//   return (
//     <div className={styles.CrewSlider}>
//       <Slider {...settings} className={styles.CrewSlider__inner}>
//         {crew.map(crewItem => {
//           return (
//             <div>
//               <div key={crewItem.id} className={styles.CrewSlider__inner_item}>
//                 <div className={styles.CrewSlider__inner_item_position}>
//                   {crewItem.position}
//                 </div>
//                 <h3 className={styles.CrewSlider__inner_item_name}>
//                   {crewItem.name}
//                 </h3>
//                 <p className={styles.CrewSlider__inner_item_text}>
//                   {crewItem.text}
//                 </p>
//                 <img
//                   className={styles.CrewSlider__inner_item_img}
//                   src={require('../../../assets/img/crew/' +
//                     crewItem.img +
//                     '.png')}
//                   alt={crewItem.name}
//                 />
//               </div>
//             </div>
//           );
//         })}
//       </Slider>
//     </div>
//   );
// };

// export default CrewSlider;

import React, { useRef } from 'react';
import { Rerousel } from 'rerousel';
import { getCrew } from '../../../crew';

const CrewSlider = () => {
  const crew = getCrew();
  const customerLogo = useRef(null);

  return (
    <div>
      <Rerousel itemRef={customerLogo} interval="5000" className="">
        {crew.map(crewItem => {
          return (
            <div className={styles.CrewItem} ref={customerLogo}>
              <div className={styles.CrewItem__info}>
                <h4 className={styles.CrewItem__position}>
                  {crewItem.position}
                </h4>
                <h3 className={styles.CrewItem__name}>{crewItem.name}</h3>
                <p className={styles.CrewItem__text}>{crewItem.text}</p>
              </div>
              <div className={styles.CrewItem__image}>
                <img
                  src={require('../../../assets/img/crew/' +
                    crewItem.img +
                    '.png')}
                  alt=""
                />
              </div>
            </div>
          );
        })}
      </Rerousel>
    </div>
  );
};

export default CrewSlider;
