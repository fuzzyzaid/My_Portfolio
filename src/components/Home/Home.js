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

function Home() {
  return (
    <>
    <BounceInAnimation>
      <Header/>
    </BounceInAnimation>

    <BounceInAnimation>
      <About/>
    </BounceInAnimation>

    <BounceInAnimation>
      <Skills/>
    </BounceInAnimation>

    <BounceInAnimation>
      <Experience/>
    </BounceInAnimation>

     <BounceInAnimation>
      <Projects/>
    </BounceInAnimation>

   {/*<Education/> */}
   
    </>
  );
}

export default Home;
