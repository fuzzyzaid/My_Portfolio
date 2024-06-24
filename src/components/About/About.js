import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    <div className={`container ${styles.customHeight}`}>
      <div className='row justify-content-center align-items-center'>
        <div className='col-12 col-lg-8 text-center text-md-start'>
          <h2 className={`display-4 mb-4 ${styles.textColor} ${styles.heading}`}>ABOUT ME</h2>
          <p className={`lead ${styles.textColor} ${styles.lead}`}>
           Hello Everyone. Welcome to my portfolio! I'm Zaid Alam, Full-Stack Developer with over 3+ years of experience in crafting responsive websites. I thrive on analyzing project requirements, seamlessly integrating front and backend technologies, and delivering cohesive solutions that exceed expectations. 
          My passion lies in staying at the forefront of industry trends, ensuring that I implement the best practices for efficient development. 
          Join me on this journey as we explore the dynamic world of software development together.
        </p>
        </div>
        <div className='col-10 col-lg-4 text-center'>
        <img src={"zaid.JPG"} className='img-fluid' alt="Zaid Alam" />
        </div>
      </div>
    </div>
  );
}

export default About;