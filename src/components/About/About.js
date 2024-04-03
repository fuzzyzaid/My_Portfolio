import React from 'react'
import styles from './About.module.css'

function About() {
  return (
    <div className={`container vh-120 bg-white`}>
      <div className='row justify-content-center align-items-center'>
        <div className='col-md-5 text-center text-md-start'>
          <h2 className="display-4 mb-4">About Me</h2>
          <p className="lead">
           Hello Everyone. Welcome to my portfolio! I'm Zaid Alam, a seasoned Full-Stack Developer with over three years of experience in crafting responsive websites. 
          I thrive on analyzing project requirements, seamlessly integrating front and backend technologies, and delivering cohesive solutions that exceed expectations. 
          My passion lies in staying at the forefront of industry trends, ensuring that I implement the best practices for efficient development. 
          Join me on this journey as we explore the dynamic world of software development together.
        </p>
        </div>
        <div className='col-md-5 text-center'>
        <img src={"zaid.JPG"} className='img-fluid' alt="Zaid Alam" />
        </div>
      </div>
    </div>
  );
}


export default About