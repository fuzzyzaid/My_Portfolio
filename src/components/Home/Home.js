import React from 'react'
import styles from "./Home.module.css"

function Home() {
  return (
  <div className="container">
    <div className={styles.menu}>
      <header>Zaid Alam</header>
      <div id="intro"><p>Software Developer</p></div>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experiences">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>    
        </ul>
      </nav>
      <section id="contact">
        <p>Contact Me</p>
        <a href="mailto:zaidalam0731@gmail.com" target="_blank">Mail</a>
        <a href="https://www.linkedin.com/in/zaid-alam/" target="_blank">LinkedIn</a>
        <a href="https://github.com/fuzzyzaid" target="_blank">Github</a>
      </section>
    </div>
    <div className={styles.content} id="scrollable-content">
      <section id="about" className={styles.section}>
        <h2>About Me</h2>
        <p>Experienced Full-Stack Developer with 3+ years in crafting responsive websites. Skilled in analyzing project requirements, adapting to new technologies, and integrating frontend and backend for cohesive solutions. Passionate about staying updated on industry trends and implementing best practices for efficient development.</p>
      </section>
      <section id="skills" className={styles.section}>
        <h2>Skills</h2>
        <div className="row">
          <div className={`col-md-3 ${styles.skillsList}`}><h3>Angular 2+</h3></div>
          <div className={`col-md-3 ${styles.skillsList}`}><h3>React JS</h3></div>
          <div className={`col-md-3 ${styles.skillsList}`}><h3>Node JS</h3></div>
          <div className={`col-md-3 ${styles.skillsList}`}><h3>Mongo DB</h3></div>
          <div className={`col-md-3 ${styles.skillsList}`}><h3>Typescript</h3></div>
          <div className={`col-md-3 ${styles.skillsList}`}><h3>Javascript</h3></div>
          <div className={`col-md-3 ${styles.skillsList}`}><h3>Jquery</h3></div>
          <div className={`col-md-3 ${styles.skillsList}`}><h3>HTML5</h3></div>
          <div className={`col-md-3 ${styles.skillsList}`}><h3>CSS 3</h3></div>
          <div className={`col-md-3 ${styles.skillsList}`}><h3>Java</h3></div>
          <div className={`col-md-3 ${styles.skillsList}`}><h3>Android Studio</h3></div>
          <div className={`col-md-3 ${styles.skillsList}`}><h3>GIT</h3></div>
          <div className={`col-md-3 ${styles.skillsList}`}><h3>SQL</h3></div>
        </div>
      </section>
      <section id="experiences" className={styles.section}>
        <h2>Experience</h2>
        <div className={styles.experience}>
          <h3>Software Engineer F2, Zensar Technologies- Pune, India (Dec 2021 - Dec 2022)</h3>
          <ul>
            <li>Worked as a Full Stack developer implementing websites and applications tailored to client specifications.</li>
            <li>Implementing service integrations according to specific requirements.</li>
            <li>Engaged in UI development, writing efficient backend codes and crafting sophisticated, reusable components.</li>
            <li>Participating in Daily Scrum meetings to address and resolve any task related issues effectively.</li>
            <li>Presenting sprint review demos to clients, showcasing the delivered work, and seeking feedback.</li>
          </ul>
        </div>
        <div className={styles.experience}>
          <h3>Software Developer, Persistent Systems- Pune, India (Aug 2019 - Dec 2021)</h3>
          <ul>
            <li>Worked as a Front-End developer implementing effective and efficient website user interface in accordance with precise requirements, ensuring proper implementation and accuracy.</li>
            <li>Analyzing and fixing defects that were reported in the application.</li>
            <li>Making websites ADA compliance by following the WCAG guidelines.</li>
          </ul>
        </div>
      </section>
      <section id="projects" className={styles.section}>
        <h2>Projects</h2>
        <div className={styles.project}>
          <h3>Project 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit eu quam ac auctor. Pellentesque rhoncus sem lorem, ac tempus nisl cursus a. Mauris sagittis odio vel sodales scelerisque. Cras aliquam iaculis nunc, sit amet porta lectus tempus sed. Morbi pretium venenatis dui a eleifend. Nunc suscipit ac nisl bibendum sodales. Aliquam aliquam elementum mi, et mattis massa vestibulum eget. Mauris quis felis ac arcu maximus placerat ac eget massa.</p>
        </div>
        <div className={styles.project}>
          <h3>Project 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit eu quam ac auctor. Pellentesque rhoncus sem lorem, ac tempus nisl cursus a. Mauris sagittis odio vel sodales scelerisque. Cras aliquam iaculis nunc, sit amet porta lectus tempus sed. Morbi pretium venenatis dui a eleifend. Nunc suscipit ac nisl bibendum sodales. Aliquam aliquam elementum mi, et mattis massa vestibulum eget. Mauris quis felis ac arcu maximus placerat ac eget massa.</p>
        </div>
      </section> 
      <section id="education" className={styles.section}>
        <h2>Education</h2>
        <ul>
          <li>Post Graduation in Web Development, Conestoga College - 2023-2024</li>
          <li>Bachelor Of Technology Computer Science, India - 2015-2019</li>
        </ul>
      </section>
    </div>
  </div>
  )
}

export default Home