import React from 'react';
import Home from './components/Home/Home';

import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.App}>
      <div className={styles.App__container}>
        <Home />
      </div>
    </div>
  );
};

export default App;
