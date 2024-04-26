import React from 'react';
import styles from './Skills.module.css';

function Skills() {
  return (
    <>
      <div className={`container vh-120 mt-6 ${styles.skillsContainer}`}>
        <h2 className="display-4 mb-4">Skills</h2>
        <div className='row my-2 justify-content-center align-items-center'>
          <div className='col-8 col-lg-4 col-xl-3'>
            <div className={`card border-secondary border-2 mb-4 ${styles.card}`}>
              <div className={`card-body d-flex flex-column justify-content-center align-items-center ${styles.cardContent}`}>
                <div>ANGULAR 2+</div>
                <img src="angular.png" alt="Angular Logo" className={styles.cardImage} />
              </div>
            </div>
          </div>
          <div className='col-8 col-lg-4 col-xl-3'>
            <div className={`card border-secondary border-2 mb-4 ${styles.card}`}>
              <div className={`card-body d-flex flex-column justify-content-center align-items-center ${styles.cardContent}`}>
                <div>REACT JS</div>
                <img src="react.png" alt="React Logo" className={styles.cardImage} />
              </div>
            </div>
          </div>
          <div className='col-8 col-lg-4 col-xl-3'>
            <div className={`card border-secondary border-2 mb-4 ${styles.card}`}>
              <div className={`card-body d-flex flex-column justify-content-center align-items-center ${styles.cardContent}`}>
                <div>NODE JS</div>
                <img src="nodejs.png" alt="Node.js Logo" className={styles.cardImage} />
              </div>
            </div>
          </div>
          <div className='col-8 col-lg-4 col-xl-3'>
            <div className={`card border-secondary border-2 mb-4 ${styles.card}`}>
              <div className={`card-body d-flex flex-column justify-content-center align-items-center ${styles.cardContent}`}>
                <div>JAVASCRIPT</div>
                <img src="javascript.png" alt="JavaScript Logo" className={styles.cardImage} />
              </div>
            </div>
          </div>
          <div className='col-8 col-lg-4 col-xl-3'>
            <div className={`card border-secondary border-2 mb-4 ${styles.card}`}>
              <div className={`card-body d-flex flex-column justify-content-center align-items-center ${styles.cardContent}`}>
                <div>TYPESCRIPT</div>
                <img src="typescript.png" alt="TypeScript Logo" className={styles.cardImage} />
              </div>
            </div>
          </div>
          <div className='col-8 col-lg-4 col-xl-3'>
            <div className={`card border-secondary border-2 mb-4 ${styles.card}`}>
              <div className={`card-body d-flex flex-column justify-content-center align-items-center ${styles.cardContent}`}>
                <div>JQUERY</div>
                <img src="jquery.png" alt="jQuery Logo" className={styles.cardImage} />
              </div>
            </div>
          </div>
          <div className='col-8 col-lg-4 col-xl-3'>
            <div className={`card border-secondary border-2 mb-4 ${styles.card}`}>
              <div className={`card-body d-flex flex-column justify-content-center align-items-center ${styles.cardContent}`}>
                <div>HTML 5</div>
                <img src="html5.png" alt="HTML5 Logo" className={styles.cardImage} />
              </div>
            </div>
          </div>
          <div className='col-8 col-lg-4 col-xl-3'>
            <div className={`card border-secondary border-2 mb-4 ${styles.card}`}>
              <div className={`card-body d-flex flex-column justify-content-center align-items-center ${styles.cardContent}`}>
                <div>CSS3</div>
                <img src="css3.png" alt="CSS3 Logo" className={styles.cardImage} />
              </div>
            </div>
          </div>
          <div className='col-8 col-lg-4 col-xl-3'>
            <div className={`card border-secondary border-2 mb-4 ${styles.card}`}>
              <div className={`card-body d-flex flex-column justify-content-center align-items-center ${styles.cardContent}`}>
                <div>BOOTSTRAP</div>
                <img src="bootstrap.png" alt="Bootstrap Logo" className={styles.cardImage} />
              </div>
            </div>
          </div>
          <div className='col-8 col-lg-4 col-xl-3'>
            <div className={`card border-secondary border-2 mb-4 ${styles.card}`}>
              <div className={`card-body d-flex flex-column justify-content-center align-items-center ${styles.cardContent}`}>
                <div>JAVA</div>
                <img src="java.png" alt="Java Logo" className={styles.cardImage} />
              </div>
            </div>
          </div>
          <div className='col-8 col-lg-4 col-xl-3'>
            <div className={`card border-secondary border-2 mb-4 ${styles.card}`}>
              <div className={`card-body d-flex flex-column justify-content-center align-items-center ${styles.cardContent}`}>
                <div>ANDROID STUDIO</div>
                <img src="androidstudio.png" alt="Android Studio Logo" className={styles.cardImage} />
              </div>
            </div>
          </div>
          <div className='col-8 col-lg-4 col-xl-3'>
            <div className={`card border-secondary border-2 mb-4 ${styles.card}`}>
              <div className={`card-body d-flex flex-column justify-content-center align-items-center ${styles.cardContent}`}>
                <div>GIT</div>
                <img src="git.png" alt="Git Logo" className={styles.cardImage} />
              </div>
            </div>
          </div>
          <div className='col-8 col-lg-4 col-xl-3'>
            <div className={`card border-secondary border-2 mb-4 ${styles.card}`}>
              <div className={`card-body d-flex flex-column justify-content-center align-items-center ${styles.cardContent}`}>
                <div>MONGODB</div>
                <img src="mongodb.png" alt="MongoDB Logo" className={styles.cardImage} />
              </div>
            </div>
          </div>
          <div className='col-8 col-lg-4 col-xl-3'>
            <div className={`card border-secondary border-2 mb-4 ${styles.card}`}>
              <div className={`card-body d-flex flex-column justify-content-center align-items-center ${styles.cardContent}`}>
                <div>SQL</div>
                <img src="sql.png" alt="SQL Logo" className={styles.cardImage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
