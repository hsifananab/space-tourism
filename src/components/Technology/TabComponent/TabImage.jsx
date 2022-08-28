import React from 'react';

import styles from './TabImage.module.css';

const TabImage = props => {
  return props.activeTab === props.id ? (
    <div className={styles.TabImage}>{props.children}</div>
  ) : null;
};

export default TabImage;
