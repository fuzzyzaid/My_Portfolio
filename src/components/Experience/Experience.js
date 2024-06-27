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
      period: "Dec 2021 - Dec 2022",
      details: [
        "Full Stack developer implementing websites and applications, using Angular, Node JS, MongoDB to create reusable, highly configurable components that increased development efficiency by 30%.",
        "Led the integration of third-party services to align with client specifications, optimizing performance and functionality.",
        "Co-ordinated and presented sprint review demos to clients, receiving an excellent satisfaction rating, and facilitating actionable feedback loops for continuous improvement.",
        "Collaborated closely with cross-functional teams in Daily Scrum meetings to address task-related issues promptly, contributing to a 20% reduction in project timeline setbacks.",
        "Received recognition for consistently delivering high-quality code, achieving a 95% success rate in resolving application defects within agreed-upon deadlines.",
      ],
    },
    {
      company: "Persistent Systems",
      location: "Pune, India",
      role: "Front-End Developer",
      period: "Aug 2019 - Dec 2021",
      details: [
        "Key role in building web applications in a healthcare project using React, Angular, HTML, CSS, and Bootstrap. Delivered tailored web applications that exceeded client expectations by implementing client-specific features and functionalities.",
        "Achieved 80% improvement in website accessibility by implementing ADA compliance measures for client websites. Identified and addressed defects in accordance with WCAG guidelines, enhancing inclusivity and gaining valuable expertise in ADA standards.",
        "Effectively managed version control using Git and collaborated with the team through JIRA to maintain an organized development environment, enabling seamless story analysis and code check-ins.",
      ],
    },
  ];

  return (
    <div className={`container ${styles.customHeight}`}>
      <div className="row">
        <div className="col-12 text-center mb-4">
          <h2 className={`display-4 mb-4 ${styles.textColor} ${styles.heading}`}>
            WORK EXPERIENCE
          </h2>
          <p className={`lead ${styles.textColor} ${styles.lead}`}>
            Embark on a journey through my professional timeline, where each
            experience has contributed to my growth over the past three years.
            From crafting immersive web experiences to optimizing performance
            and functionality, my work reflects a commitment to excellence and a
            passion for innovation.
          </p>
        </div>
      </div>
      <div className={`row ${styles.experienceContainer}`}>
        {experiences.map((exp, index) => (
          <div key={index} className={`col-12 col-md-6 ${styles.experienceColumn}`}>
            <div className={`${styles.headerCompany}`} >
              <h3 className={styles.companyName}>
              {exp.role}
                
              </h3>
              <p className={styles.companyDetails}>
                <strong>
                {exp.company} <br /> <span>{exp.location}</span>  <br /> {exp.period}
                </strong>
              </p>
              <ul className={`list-unstyled ${styles.taskList}`}>
                {exp.details.map((detail, i) => (
                  <li key={i} className="d-flex align-items-start">
                    <div className={`me-2 ${styles.taskIcon}`}>
                      <FontAwesomeIcon icon={faHashtag} />
                    </div>
                    <p className={`${styles.details}`}>{detail}</p>
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
  );
}

export default Experience;
