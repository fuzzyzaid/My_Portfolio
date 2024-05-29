import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import styles from "./Experience.module.css";

function Experience() {
  return (
    <div className={`container ${styles.customHeight}`}>
      <h2 className="text-center mt-4 mb-4">Work Experience</h2>

      <div className={`mb-4 ${styles.experienceContainer}`}>
        <div className="row">
          <div className={`col-md-4 ${styles.companyDetailsContainer}`}>
            <div className={styles.companyDetailsInner}>
              <h3 className={styles.companyName}>Zensar Technologies <br />Pune,India</h3>
              <p className={styles.companyDetails}>
                <strong> Full-Stack Developer<br />December 2021 - December 2022</strong>
              </p>
            </div>
          </div>
          <div className="col-md-8">
            <ul className={`list-unstyled ${styles.taskList}`}>
              <li className="d-flex align-items-start">
                <div className={`me-2 ${styles.taskIcon}`}>
                  <FontAwesomeIcon icon={faHashtag} />
                </div>
                <span>
                  Worked as a Full-Stack developer implementing websites and applications, using latest tools and technologies to create reusable, highly configurable components that increased development efficiency by 30%.
                </span>
              </li>
              <li className="d-flex align-items-start">
                <div className={`me-2 ${styles.taskIcon}`}>
                  <FontAwesomeIcon icon={faHashtag} />
                </div>
                <span>
                  Led the integration of third-party services to align with client specifications, optimizing performance and functionality.
                </span>
              </li>
              <li className="d-flex align-items-start">
                <div className={`me-2 ${styles.taskIcon}`}>
                  <FontAwesomeIcon icon={faHashtag} />
                </div>
                <span>
                  Coordinated and presented sprint review demos to clients, receiving an excellent satisfaction rating and facilitating actionable feedback loops for continuous improvement.
                </span>
              </li>
              <li className="d-flex align-items-start">
                <div className={`me-2 ${styles.taskIcon}`}>
                  <FontAwesomeIcon icon={faHashtag} />
                </div>
                <span>
                  Collaborated closely with cross-functional teams in Daily Scrum meetings to address task-related issues promptly, contributing to a 20% reduction in project timeline setbacks.
                </span>
              </li>
              <li className="d-flex align-items-start">
                <div className={`me-2 ${styles.taskIcon}`}>
                  <FontAwesomeIcon icon={faHashtag} />
                </div>
                <span>
                  Received recognition for consistently delivering high-quality code, achieving a defect resolution rate of 95% within agreed-upon deadlines.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`mb-4 ${styles.experienceContainer}`}>
        <div className="row">
          <div className={`col-md-4 ${styles.companyDetailsContainer}`}>
            <div className={styles.companyDetailsInner}>
              <h3 className={styles.companyName}>Persistent Systems<br />Pune,India</h3>
              <p className={styles.companyDetails}>
                <strong> Front-End Developer<br />August 2019 - December 2021</strong>
              </p>
            </div>
          </div>
          <div className="col-md-8">
            <ul className={`list-unstyled ${styles.taskList}`}>
              <li className="d-flex align-items-start">
                <div className={`me-2 ${styles.taskIcon}`}>
                  <FontAwesomeIcon icon={faHashtag} />
                </div>
                <span>
                  Delivered exceptional front-end solutions, ensuring seamless user experiences on client websites, leading to a 20% increase in user engagement.
                </span>
              </li>
              <li className="d-flex align-items-start">
                <div className={`me-2 ${styles.taskIcon}`}>
                  <FontAwesomeIcon icon={faHashtag} />
                </div>
                <span>
                  Proactively analyzed and rectified application defects, maintaining a defect resolution rate of 90%, exceeding industry benchmarks.
                </span>
              </li>
              <li className="d-flex align-items-start">
                <div className={`me-2 ${styles.taskIcon}`}>
                  <FontAwesomeIcon icon={faHashtag} />
                </div>
                <span>
                  Achieved 80% improvement in website accessibility by implementing ADA compliance measures for client websites. Expertly identified and addressed defects in accordance with WCAG guidelines, enhancing inclusivity and gaining valuable expertise in ADA standards.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
