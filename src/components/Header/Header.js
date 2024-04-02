// Header.jsx

import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa'; // Import close icon from react-icons
import styles from './Header.module.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`vh-100 ${menuOpen ? `${styles.menuOpen}`: ''}`}>
      <nav className="navbar navbar-expand-lg navbar-light mt-4">
        <div className="container">
          <button className="navbar-toggler ml-auto" type="button" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <span className="navbar-toggler-icon"></span>}
          </button>
          <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="mailto:zaidalam0731@gmail.com"><i className={`${styles.mail}bi bi-envelope h1 mr-4`}></i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.linkedin.com/in/zaid-alam/"><i className={`${styles.linkedIn} bi bi-linkedin h1  mr-4`}></i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/fuzzyzaid"><i className={`${styles.github} bi bi-github h1  mr-4`}></i></a>               
              </li>
              <li className="nav-item">
                <a className="nav-link" href="tel:+12267538192"><i className={`${styles.phone} bi bi-phone h1  mr-4`}></i></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className={`${styles.headerInfo}`}>
        <h1 className={`${styles.name}`}>Zaid Alam</h1> {/* Larger font */}
        <p className={`${styles.title} mt-2`}>Full Stack Developer</p>
        <p className={`${styles.intro} mt-2`}>Passionate about building scalable and user-friendly web applications.</p>
        <img src={"zaid.JPG"} class= {`${styles.profile} rounded-4`} alt="Zaid Alam" />
      </div>
    </div>
  );
}

export default Header;
