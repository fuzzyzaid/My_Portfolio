import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Projects.module.css';

function Projects() {
  return (
    <div className={`container ${styles.customHeight}`}>
      <h2 className={`display-4 mb-4 ${styles.textColor} ${styles.heading}` }>PROJECTS</h2>
      <p className={`lead ${styles.textColor} ${styles.lead}`}>Explore the projects I have crafted, showcasing my skills and dedication. Each project reflects the knowledge I've gained and the innovative solutions I've developed.</p>
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
              Imagine a bustling company where tracking employees and their work hours is seamless. I developed an Employee Management System using the MERN stack to streamline this process.              </p>
              <p className={styles.projectDescription}>
              With secure authentication, only authorized users can access the platform, ensuring robust data protection. Administrators can efficiently manage employee records with easy-to-use features for adding, editing, and deleting.              </p>
              <p className={styles.projectDescription}>
              A highlight is the timesheet management, allowing admins to effortlessly track work hours. Employees can securely log in to view their timesheets through a user-friendly interface.              </p>
              <p className={styles.projectDescription}>
              This system demonstrates my ability to create reliable, user-centric applications that blend advanced technology with practical functionality.              </p>
              <a href='https://github.com/employee-management-system-zaid' target='_blank' rel='noopener noreferrer' className={styles.projectRepoLink}>
                View Repository
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <div className={`d-flex ${styles.projectCard}`}>
            <div className='col-md-6'>
              <div className={styles.projectVideo}>
                <video controls width='100%' autoPlay muted>
                  <source src={"DD.mp4"} type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className={`col-md-6 ${styles.projectContent}`}>
              <h3 className={styles.projectTitle}>Digital Diary</h3>
              <p className={styles.projectDescription}>
              Imagine the days when people would write down their daily thoughts in a physical diary. Today, with everything going digital, I've created a modern solution to this timeless practice — a Digital Diary using the MERN stack.
              </p>
              <p className={styles.projectDescription}>
              This digital diary features a sleek, intuitive interface that allows users to record their daily notes efficiently. With secure authentication, user privacy and data security are guaranteed. Users can seamlessly log in to add, edit, and delete their notes, ensuring their thoughts are always accessible and well-organized.              </p>
              <p className={styles.projectDescription}>
              This project highlights my ability to blend tradition with technology, providing a user-friendly and secure platform for modern note-taking.              </p>
              
              <a href='https://github.com/digital-diary-zaid' target='_blank' rel='noopener noreferrer' className={styles.projectRepoLink}>
                View Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
