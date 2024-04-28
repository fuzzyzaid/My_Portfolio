import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import styles from './Experience.module.css';

function Experience() {
  return (
    <div className={`container ${styles.experienceContainer}`}>
      <h2 className="text-center mt-4 mb-4">Experience</h2>
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-6">
              <div className={`card mb-4 ${styles.experienceCard}`}>
                <div className="card-body">
                  <h3 className="card-title">Zensar Technologies</h3>
                  <ul className={`list-unstyled ${styles.taskList}`}>
                    <li className="d-flex align-items-center">
                      <div className={`me-2 ${styles.taskIcon}`}>
                        <FontAwesomeIcon icon={faHashtag} />
                      </div>
                      <span>Worked as a Full Stack developer implementing websites and applications, using latest tools and technologies to create reusable, highly configurable components that increased development efficiency by 30%.</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className={`me-2 ${styles.taskIcon}`}>
                        <FontAwesomeIcon icon={faHashtag} />
                      </div>
                      <span>Led the integration of third-party services to align with client specifications, optimizing performance and functionality.</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className={`me-2 ${styles.taskIcon}`}>
                        <FontAwesomeIcon icon={faHashtag} />
                      </div>
                      <span>Coordinated and presented sprint review demos to clients, receiving an excellent satisfaction rating and facilitating actionable feedback loops for continuous improvement.</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className={`me-2 ${styles.taskIcon}`}>
                        <FontAwesomeIcon icon={faHashtag} />
                      </div>
                      <span>Collaborated closely with cross-functional teams in Daily Scrum meetings to address task-related issues promptly, contributing to a 20% reduction in project timeline setbacks.</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className={`me-2 ${styles.taskIcon}`}>
                        <FontAwesomeIcon icon={faHashtag} />
                      </div>
                      <span>Received recognition for consistently delivering high-quality code, achieving a defect resolution rate of 95% within agreed-upon deadlines.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={`card mb-4 ${styles.experienceCard}`}>
                <div className="card-body">
                  <h3 className="card-title">Persistent Systems</h3>
                  <ul className={`list-unstyled ${styles.taskList}`}>
                    <li className="d-flex align-items-center">
                      <div className={`me-2 ${styles.taskIcon}`}>
                        <FontAwesomeIcon icon={faHashtag} />
                      </div>
                      <span>Delivered exceptional front-end solutions, ensuring seamless user experiences on client websites, leading to a 20% increase in user engagement.</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className={`me-2 ${styles.taskIcon}`}>
                        <FontAwesomeIcon icon={faHashtag} />
                      </div>
                      <span>Proactively analyzed and rectified application defects, maintaining a defect resolution rate of 90%, exceeding industry benchmarks.</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className={`me-2 ${styles.taskIcon}`}>
                        <FontAwesomeIcon icon={faHashtag} />
                      </div>
                      <span>Achieved 80% improvement in website accessibility by implementing ADA compliance measures for client websites. Expertly identified and addressed defects in accordance with WCAG guidelines, enhancing inclusivity and gaining valuable expertise in ADA standards.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ); 
}

export default Experience;
