import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import styles from './Education.module.css';

function Education() {
  const educationData = [
    {
      degree: "Post Graduation in Web Development",
      institution: "Conestoga College, Canada",
      period: "Jan 2023 - Apr 2024"
    },
    {
      degree: "Bachelor Of Technology in Computer Science",
      institution: "Netaji Subhash Engineering College, India",
      period: "2015 - 2019"
    }
  ];

  return (
    <div className={`container ${styles.customHeight}`}>
      <h2 className={`display-4 mb-4 ${styles.heading}`}>EDUCATION</h2>
      <div className="row">
        {educationData.map((edu, index) => (
          <div key={index} className="col-md-6">
            <div className={`card ${styles.educationCard}`}>
              <div className={`card-body ${styles.cardBody}`}>
                <div className={`mb-3 ${styles.iconContainer}`}>
                  <FontAwesomeIcon icon={faGraduationCap} size="2x" />
                </div>
                <h3 className={`card-title ${styles.degree}`}>{edu.degree}</h3>
                <h4 className={`card-subtitle mb-2 ${styles.institution}`}>{edu.institution}</h4>
                <p className={`card-text ${styles.period}`}>{edu.period}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
