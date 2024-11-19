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
        "Developed and maintained web and desktop applications using a variety of programming languages and frameworks, including Node.js, Express.js, JavaScript, Java, Spring Boot and React, to deliver high-quality software solutions",
        "Successfully implemented comprehensive ADA compliance measures, meticulously addressing accessibility defects in line with WCAG standards, leading to a fully inclusive user experience",
        "Utilized Git for meticulous version control, orchestrating smooth branching, merging, and deployment processes while maintaining a clean and organized codebase; facilitated seamless team collaboration",
        "Participated in detailed project planning sessions, utilizing Agile methodologies, breaking down tasks into granular user stories, and estimating effort using story points, which streamlined development",
        "Optimized existing codebases by refactoring and improving performance, reducing load times, and enhancing overall application efficiency",
        "Worked collaboratively with multidisciplinary teams to pinpoint and resolve interface bugs, ensuring seamless integration and functionality across platforms",
        "Applied in-depth software engineering skills to spearhead advancements and operational efficiencies within the project, ensuring alignment with technological best practices"
      ],
    },
    {
      company: "Persistent Systems",
      location: "Pune, India",
      role: "Front-End Developer",
      period: "Aug 2019 - Dec 2021",
      details: [
        "Developed and maintained dynamic web applications using Angular for front-end, Node.js for back-end, and MongoDB for database management, ensuring high-performance and scalability",
 	      "Designed and implemented RESTful APIs to facilitate seamless data exchange between front-end and back-end, improving data handling and application responsiveness",
	      "Employed JWT and OAuth for secure authentication and authorization, safeguarding application data and user privacy",
        "Optimized application performance through lazy loading, code splitting, and efficient database queries, reducing load times and improving user experience",
	      "Implemented CI/CD pipelines using GitHub Actions and Jenkins, automating build, test, and deployment workflows to accelerate release cycles and maintain code quality",
      	"Developed and executed strategic enhancements to user interfaces, significantly boosting usability and streamlining interaction flows for better user engagement",
        "Oversaw the implementation of stringent code review practices and coding standards, significantly elevating code quality and boosting development team efficiency"
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
