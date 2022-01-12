import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Slider from './components/Slider/Slider';
import styles from './App.module.scss';

const App = () => (
  <>
    <NavBar />
    <main className={styles.main}>
      <Slider />
    </main>
  </>
);

export default App;
