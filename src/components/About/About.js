import React from 'react'
import styles from './About.module.css'

function About() {
  return (
    <div className={`about-container vh-100 d-flex justify-content-center align-items-center bg-white ${styles.aboutContainer}`}>
      <div className="text-center">
        <h2 className="display-4 mb-4">About Me</h2>
        <p className="text-center">
          Welcome to my portfolio! I'm Zaid Alam, a seasoned Full-Stack Developer with over three years of experience in crafting responsive websites. 
          I thrive on analyzing project requirements, seamlessly integrating front and backend technologies, and delivering cohesive solutions that exceed expectations. 
          My passion lies in staying at the forefront of industry trends, ensuring that I implement the best practices for efficient development. 
          Join me on this journey as we explore the dynamic world of software development together.
        </p>
      </div>
    </div>
  );
}


export default About