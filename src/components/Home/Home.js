import React from 'react';
import styles from './Home.module.css'; // Assuming you have CSS modules set up
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Header from '../Header/Header';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';
import Projects from '../Projects/Projects';
import Education from '../Education/Education';
import BounceInAnimation from '../BounceInAnimation/BounceInAnimation';
import SlideRight from '../SlideRight/SlideRight';
import SlideLeft from '../SlideLeft/SlideLeft';
import BottomDown from '../BottomDown/BottomDown';

function Home() {
  return (
    <>
    <BottomDown>
      <Header/>
    </BottomDown>
    <SlideRight>
      <About/>
    </SlideRight>
    <BounceInAnimation>
      <Skills/>
    </BounceInAnimation>
    <SlideRight>
      <Experience/>
    </SlideRight>
    {/*<Projects/>
    <Education/> */}
   
    </>
  );
}

export default Home;
