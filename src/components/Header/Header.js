import React from 'react';
import styles from './Header.module.css'

function Header() {
  return (
    <>
      <header className="bg-dark text-light py-3">
        <div className="container">
          <h1 className="display-5 mb-3">Zaid Alam</h1>
          <p className="lead mb-4">Software Developer</p>
          <div>
            <a href="mailto:zaidalam0731@gmail.com" className={`text-light ${styles.contact}`} target="_blank" rel="noopener noreferrer">Mail</a>
            <a href="https://www.linkedin.com/in/zaid-alam/" className={`text-light ${styles.contact}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/fuzzyzaid" className={`text-light ${styles.contact}`} target="_blank" rel="noopener noreferrer">Github</a>
            <a href="tel:+12267538192" className={`text-light ${styles.contact}`} target="_blank" rel="noopener noreferrer">+1 (226) 753-8192</a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
