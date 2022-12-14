import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Destinations from './components/Destinations/Destinations';
import Crew from './components/Crew/Crew';
import Technology from './components/Technology/Technology';

import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.App}>
      <Header />

      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/destinations" element={<Destinations />}>
          <Route path=":path" element={<Destinations />}></Route>
        </Route>
        <Route path="/crew" element={<Crew />}></Route>
        <Route path="/technology" element={<Technology />}></Route>
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </div>
  );
};

export default App;
