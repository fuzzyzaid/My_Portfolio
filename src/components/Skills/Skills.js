import React from 'react';
import styles from './Skills.module.css';

function Skills() {
  return (
    <>
      <div className={`container ${styles.customHeight}`}>
        <div className='row justify-content-center align-items-center'>
          <div className={`col-10 col-lg-8 text-center ${styles.skillsContainer}`}>
            <div className={`col-12 ${styles.skillsBox}`}>
              <div className={`progress mb-3 ${styles.skillProgressBar}`}>
                <div className={`progress-bar ${styles.bgCOlor} ${styles.Angular}`} role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">Angular</div>
              </div>
              <div className={`progress mb-3 ${styles.skillProgressBar}`}>
                <div className={`progress-bar ${styles.bgCOlor} ${styles.React}`} role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">React</div>
              </div>
              <div className={`progress mb-3 ${styles.skillProgressBar}`}>
                <div className={`progress-bar ${styles.bgCOlor} ${styles.Node}`} role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">Node.js</div>
              </div>
              <div className={`progress mb-3 ${styles.skillProgressBar}`}>
                <div className={`progress-bar ${styles.bgCOlor} ${styles.Javascript}`} role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">JavaScript</div>
              </div>
              <div className={`progress mb-3 ${styles.skillProgressBar}`}>
                <div className={`progress-bar ${styles.bgCOlor} ${styles.Html}`} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">HTML5</div>
              </div>
              <div className={`progress mb-3 ${styles.skillProgressBar}`}>
                <div className={`progress-bar ${styles.bgCOlor} ${styles.Css}`} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">CSS3</div>
              </div>
              <div className={`progress mb-3 ${styles.skillProgressBar}`}>
                <div className={`progress-bar ${styles.bgCOlor} ${styles.Bootstrap}`} role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">Bootstrap</div>
              </div>
              <div className={`progress mb-3 ${styles.skillProgressBar}`}>
                <div className={`progress-bar ${styles.bgCOlor} ${styles.Typescript}`} role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">TypeScript</div>
              </div>
              <div className={`progress mb-3 ${styles.skillProgressBar}`}>
                <div className={`progress-bar ${styles.bgCOlor} ${styles.jquery}`} role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">jQuery</div>
              </div>
              <div className={`progress mb-3 ${styles.skillProgressBar}`}>
                <div className={`progress-bar ${styles.bgCOlor} ${styles.mongodb}`} role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">MongoDB</div>
              </div>
              <div className={`progress mb-3 ${styles.skillProgressBar}`}>
                <div className={`progress-bar ${styles.bgCOlor} ${styles.sql}`} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">SQL</div>
              </div>
              <div className={`progress mb-3 ${styles.skillProgressBar}`}>
                <div className={`progress-bar ${styles.bgCOlor} ${styles.sql}`} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">PostgreSQL</div>
              </div>
              <div className={`progress mb-3 ${styles.skillProgressBar}`}>
                <div className={`progress-bar ${styles.bgCOlor} ${styles.as}`} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Android Studio</div>
              </div>
              <div className={`progress mb-3 ${styles.skillProgressBar}`}>
                <div className={`progress-bar ${styles.bgCOlor} ${styles.java}`} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Java</div>
              </div>
              <div className={`progress mb-3 ${styles.skillProgressBar}`}>
                <div className={`progress-bar ${styles.bgCOlor} ${styles.java}`} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Python</div>
              </div>
              <div className={`progress mb-3 ${styles.skillProgressBar}`}>
                <div className={`progress-bar ${styles.bgCOlor} ${styles.git}`} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Git</div>
              </div>
              <div className={`progress mb-3 ${styles.skillProgressBar}`}>
                <div className={`progress-bar ${styles.bgCOlor} ${styles.java}`} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Agile</div>
              </div>
              <div className={`progress mb-3 ${styles.skillProgressBar}`}>
                <div className={`progress-bar ${styles.bgCOlor} ${styles.java}`} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">JIRA</div>
              </div>
              <div className={`progress mb-3 ${styles.skillProgressBar}`}>
                <div className={`progress-bar ${styles.bgCOlor} ${styles.java}`} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">ADA</div>
              </div>
              <div className={`progress mb-3 ${styles.skillProgressBar}`}>
                <div className={`progress-bar ${styles.bgCOlor} ${styles.java}`} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">JAWS</div>
              </div>
            </div>
          </div>
          <div className={`col-12 col-lg-4 text-center text-md-start ${styles.textTop}`}>  
                <h2 className={`display-4 ${styles.textColor} ${styles.heading}`}>SKILLS</h2>
                <p className={`lead ${styles.textColor} ${styles.lead}`}>
                  Dive into my diverse skillset, crafted with precision using the latest tools and technologies. From frontend frameworks to backend systems, databases, version control and more, I excel in harnessing cutting-edge solutions to deliver robust and seamless experiences.
                </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
