import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Projects.module.css';

function Projects() {
  return (
    <div className='container'>
      <h2 className={`text-center my-4 ${styles.heading}`}>Projects</h2>
      <div className='row'>
        <div className='col-md-6'>
          <div className={styles.projectCard}>
            <img src='path-to-employee-management-image.jpg' alt='Employee Management Systems' className={`img-fluid ${styles.projectImage}`} />
            <h3>Employee Management Systems</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit eu quam ac auctor.
              Pellentesque rhoncus sem lorem, ac tempus nisl cursus a. Mauris sagittis odio vel sodales
              scelerisque. Cras aliquam iaculis nunc, sit amet porta lectus tempus sed. Morbi pretium venenatis
              dui a eleifend. Nunc suscipit ac nisl bibendum sodales. Aliquam aliquam elementum mi, et mattis
              massa vestibulum eget. Mauris quis felis ac arcu maximus placerat ac eget massa.
            </p>
          </div>
        </div>
        <div className='col-md-6'>
          <div className={styles.projectCard}>
            <img src='path-to-digital-diary-image.jpg' alt='Digital Diary' className={`img-fluid ${styles.projectImage}`} />
            <h3>Digital Diary</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit eu quam ac auctor.
              Pellentesque rhoncus sem lorem, ac tempus nisl cursus a. Mauris sagittis odio vel sodales
              scelerisque. Cras aliquam iaculis nunc, sit amet porta lectus tempus sed. Morbi pretium venenatis
              dui a eleifend. Nunc suscipit ac nisl bibendum sodales. Aliquam aliquam elementum mi, et mattis
              massa vestibulum eget. Mauris quis felis ac arcu maximus placerat ac eget massa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
