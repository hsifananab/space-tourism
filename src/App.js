import React from 'react';
import Home from './components/Home/Home';

import styles from './App.module.css';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.App__container}>
        <Home />
      </div>
    </div>
  );
};

export default App;
