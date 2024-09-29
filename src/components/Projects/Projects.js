import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Projects.module.css';

function Projects() {
  return (
    <div className={`container ${styles.customHeight}`}>
      <h2 className={`display-4 mb-4 ${styles.textColor} ${styles.heading}` }>PROJECTS</h2>
      <p className={`lead ${styles.textColor} ${styles.lead}`}>Explore the projects I have crafted, showcasing my skills and dedication. Each project reflects the knowledge I've gained and the innovative solutions I've developed.</p>

      {/* First Project: Employee Management System */}
      <div className='row mb-5'>
        <div className='col-12'>
          <div className={`d-flex ${styles.projectCard}`}>
            <div className='col-md-6'>
              <div className={styles.projectVideo}>
                <video controls width='100%' autoPlay muted>
                  <source src={"EMS.mp4"} type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className={`col-md-6 ${styles.projectContent}`}>
              <h3 className={styles.projectTitle}>Employee Management Systems</h3>
              <p className={styles.projectDescription}>
                I developed an Employee Management System using the MERN stack to streamline this process. With secure authentication, only authorized users can access the platform, ensuring robust data protection.
              </p>
              <a href='https://github.com/employee-management-system-zaid' target='_blank' rel='noopener noreferrer' className={styles.projectRepoLink}>
                View Repository
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Second Project: BlogZ */}
      <div className='row mb-5'>
        <div className='col-12'>
          <div className={`d-flex ${styles.projectCard}`}>
            <div className='col-md-6'>
              <div className={styles.projectVideo}>
                <video controls width='100%' autoPlay muted>
                  <source src={"BlogZ.mp4"} type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className={`col-md-6 ${styles.projectContent}`}>
              <h3 className={styles.projectTitle}>BlogZ</h3>
              <p className={styles.projectDescription}>
                I developed BlogZ, a social media platform using the MEAN stack, where users can create and share blog posts effortlessly.
              </p>
              <a href='https://github.com/blogZ-zaid' target='_blank' rel='noopener noreferrer' className={styles.projectRepoLink}>
                View Repository
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className={`text-center ${styles.footer}`}>
        <h5 className={`mb-4 ${styles.textColor}`}>Want to see more of my projects?</h5>
        <p className={`small ${styles.textColor}`}>
          Explore my GitHub for a deeper dive into my coding journey, where you'll find more innovative solutions and passion-driven projects.
        </p>
        <a href='https://github.com/fuzzyzaid' target='_blank' rel='noopener noreferrer' className={`btn btn-sm btn-primary ${styles.githubLink}`}>
          Check out my GitHub
        </a>
        <div className='mb-5'></div>
      </div>
    </div>
  );
}

export default Projects;
