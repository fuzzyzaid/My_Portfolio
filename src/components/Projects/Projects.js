import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Projects.module.css';

function Projects() {
  return (
    <div className={`container ${styles.customHeight}`}>
      <h2 className={`display-4 mb-4 ${styles.textColor} ${styles.heading}` }>PROJECTS</h2>
      <p className={`lead ${styles.textColor} ${styles.lead}`}>Explore some of the recent projects I have crafted, showcasing my skills and dedication. Each project reflects the knowledge I've gained and the innovative solutions I've developed.</p>

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
                Imagine a bustling company where tracking employees and their work hours is seamless. I developed an Employee Management System using the MERN stack to streamline this process.
              </p>
              <p className={styles.projectDescription}>
                With secure authentication, only authorized users can access the platform, ensuring robust data protection. Administrators can efficiently manage employee records with easy-to-use features for adding, editing, and deleting.
              </p>
              <p className={styles.projectDescription}>
                A highlight is the timesheet management, allowing admins to effortlessly track work hours. Employees can securely log in to view their timesheets through a user-friendly interface.
              </p>
              <p className={styles.projectDescription}>
                This system demonstrates my ability to create reliable, user-centric applications that blend advanced technology with practical functionality.
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
                Picture this: you’ve just returned from an amazing trip and want to share your adventures. I developed BlogZ, a social media platform using the MEAN stack (Angular, Node.js, Express, MongoDB), where you can create and share blog posts effortlessly.
              </p>
              <p className={styles.projectDescription}>
                Secure authentication ensures your data is safe. Follow users, view their posts, and build a community around shared interests.
              </p>
              <p className={styles.projectDescription}>
                Blogz features an interface for creating, editing, and deleting posts. Manage your content with ease, and stay updated with a dynamic feed from the users you follow.
              </p>
              <p className={styles.projectDescription}>
                This project highlights my ability to develop interactive, user-centric applications that bring people together.
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
        
        <p className={`${styles.textColor}`}>
        ** Discover more of my work on 
          <a href='https://github.com/fuzzyzaid' target='_blank' rel='noopener noreferrer' className={`${styles.githubLink}`}>
             GitHub
          </a>
        , where I showcase innovative projects and solutions. **</p>
        
        <div className='mb-5'></div>
      </div>
    </div>
  );
}

export default Projects;
