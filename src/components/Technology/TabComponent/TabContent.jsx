import React from 'react';

const TabContent = props => {
  return props.activeTab === props.id ? (
    <div className="TabContent">{props.children}</div>
  ) : null;
};

export default TabContent;
