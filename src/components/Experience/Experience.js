import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import styles from "./Experience.module.css";

function Experience() {
  const experiences = [
    {
      company: "Zensar Technologies",
      location: "Pune, India",
      role: "Full-Stack Developer",
      period: "December 2021 - December 2022",
      details: [
        "Worked as a Full-Stack developer implementing websites and applications, using latest tools and technologies to create reusable, highly configurable components that increased development efficiency by 30%.",
        "Led the integration of third-party services to align with client specifications, optimizing performance and functionality.",
        "Coordinated and presented sprint review demos to clients, receiving an excellent satisfaction rating and facilitating actionable feedback loops for continuous improvement.",
        "Collaborated closely with cross-functional teams in Daily Scrum meetings to address task-related issues promptly, contributing to a 20% reduction in project timeline setbacks.",
        "Received recognition for consistently delivering high-quality code, achieving a defect resolution rate of 95% within agreed-upon deadlines.",
      ],
    },
    {
      company: "Persistent Systems",
      location: "Pune, India",
      role: "Front-End Developer",
      period: "August 2019 - December 2021",
      details: [
        "Delivered exceptional front-end solutions, ensuring seamless user experiences on client websites, leading to a 20% increase in user engagement.",
        "Proactively analyzed and rectified application defects, maintaining a defect resolution rate of 90%, exceeding industry benchmarks.",
        "Achieved 80% improvement in website accessibility by implementing ADA compliance measures for client websites.",
      ],
    },
  ];

  return (
    <div className={`container ${styles.customHeight}`}>
    <div className="row">
      <div className="col-12 text-center mb-4">
        <h2 className="mt-4 mb-2">Work Experience</h2>
        <p className="lead">Embark on a journey through my professional timeline, where each experience has contributed to my growth over the past three years. From crafting immersive web experiences to optimizing performance and functionality, my work reflects a commitment to excellence and a passion for innovation.</p>
      </div>
    </div>
    <div className={`row ${styles.experienceContainer}`}>
      <div className="col-12">
        <div className="row">
          {experiences.map((exp, index) => (
            <div key={index} className={`col-12 col-md-6 ${styles.experienceColumn}`}>
              <div>
                <h3 className={styles.companyName}>
                  {exp.company} <br /> <span>{exp.location}</span>
                </h3>
                <p className={styles.companyDetails}>
                  <strong>
                    {exp.role} <br /> {exp.period}
                  </strong>
                </p>
                <ul className={`list-unstyled ${styles.taskList}`}>
                  {exp.details.map((detail, i) => (
                    <li key={i} className="d-flex align-items-start">
                      <div className={`me-2 ${styles.taskIcon}`}>
                        <FontAwesomeIcon icon={faHashtag} />
                      </div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Add a horizontal line after the "Zensar Technologies" experience in mobile view */}
              {index === 0 && (
                <div className={`horizontal-line ${styles.horizontalLine}`} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>  
  );
}

export default Experience;
