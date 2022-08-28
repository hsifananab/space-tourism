import React from 'react';

import styles from './TabItem.module.css';

const TabItem = props => {
  const handleClick = () => props.setActiveTab(props.id);
  return (
    <li
      className={`${styles.TabItem} + ${
        props.activeTab === props.id ? `${styles.TabItem_active}` : null
      }`}
      onClick={handleClick}
    >
      {props.id}
    </li>
  );
};

export default TabItem;
