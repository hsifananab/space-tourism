import React, { useState, useEffect } from 'react';
import { getTechnologies } from '../../../technologies';
import TabContent from './TabContent';
import TabImage from './TabImage';
import TabItem from './TabItem';

import styles from './Tabs.module.css';

const technologies = getTechnologies();
const getWindowSize = () => {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(getWindowSize());
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  console.log(windowSize);

  return (
    <div className={styles.Tabs}>
      <ul className={styles.Tabs__list}>
        {technologies.map(tech => {
          return (
            <TabItem
              key={tech.id}
              id={tech.id}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            ></TabItem>
          );
        })}
      </ul>
      <div className={styles.Tabs__outlet}>
        {technologies.map(tech => {
          return (
            <TabContent key={tech.id} id={tech.id} activeTab={activeTab}>
              <div className={styles.Tabs__content}>
                <div className={styles.Tabs__text}>
                  <p className={styles.Tabs__content_suptitle}>
                    the terminology...
                  </p>
                  <h3 className={styles.Tabs__content_title}>{tech.title}</h3>
                  <p className={styles.Tabs__content_text}>{tech.text}</p>
                </div>
              </div>
            </TabContent>
          );
        })}
      </div>

      <div className={styles.Tabs__img}>
        {technologies.map(tech => {
          return (
            <TabImage key={tech.id} id={tech.id} activeTab={activeTab}>
              <img
                src={
                  windowSize.innerWidth <= 770
                    ? require('../../../assets/img/technology/' +
                        tech.landscape +
                        '.jpg')
                    : require('../../../assets/img/technology/' +
                        tech.portrait +
                        '.jpg')
                }
                alt={tech.name}
              />
            </TabImage>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
