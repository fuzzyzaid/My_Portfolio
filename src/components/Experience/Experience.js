import React from 'react';
import styles from './Experience.module.css';

function Experience() {
  return (
    <div className={`container bg-light ${styles.experienceContainer}`}>
      <h2>Experience</h2>
      <div className="row">
        <div className="col-12 col-lg-6">
          <h3>Zensar Technologies</h3>
          <ul className={`list-unstyled ${styles.taskList}`}>
            <li>
              <span className={styles.taskIcon}>•</span> Worked as a Full Stack developer implementing websites and applications, using latest tools and technologies to create reusable, highly configurable components that increased development efficiency by 30%.
            </li>
            <li>
              <span className={styles.taskIcon}>•</span> Led the integration of third-party services to align with client specifications, optimizing performance and functionality.
            </li>
            <li>
              <span className={styles.taskIcon}>•</span> Coordinated and presented sprint review demos to clients, receiving an excellent satisfaction rating and facilitating actionable feedback loops for continuous improvement.
            </li>
            <li>
              <span className={styles.taskIcon}>•</span> Collaborated closely with cross-functional teams in Daily Scrum meetings to address task-related issues promptly, contributing to a 20% reduction in project timeline setbacks.
            </li>
            <li>
              <span className={styles.taskIcon}>•</span> Received recognition for consistently delivering high-quality code, achieving a defect resolution rate of 95% within agreed-upon deadlines.
            </li>
          </ul>
        </div>
        <div className="col-12 col-lg-6">
          <h3>Persistent Systems</h3>
          <ul className={`list-unstyled ${styles.taskList}`}>
            <li>
              <span className={styles.taskIcon}>•</span> Delivered exceptional front-end solutions, ensuring seamless user experiences on client websites, leading to a 20% increase in user engagement.
            </li>
            <li>
              <span className={styles.taskIcon}>•</span> Proactively analyzed and rectified application defects, maintaining a defect resolution rate of 90%, exceeding industry benchmarks.
            </li>
            <li>
              <span className={styles.taskIcon}>•</span> Achieved 80% improvement in website accessibility by implementing ADA compliance measures for client websites. Expertly identified and addressed defects in accordance with WCAG guidelines, enhancing inclusivity and gaining valuable expertise in ADA standards.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
