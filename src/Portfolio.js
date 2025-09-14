import React from 'react';

function Portfolio() {
  return (
    <>
      <header className="header">
        <nav className="navbar">
            <a href="#home" className="nav-logo">&lt;Abhishek/&gt;</a>
            <ul className="nav-menu">
                <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
                <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
                <li className="nav-item"><a href="#skills" className="nav-link">Skills</a></li>
                <li className="nav-item"><a href="#experience" className="nav-link">Experience</a></li>
                <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
                <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
            <div className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
      </header>

      <main>
        <section className="home" id="home">
            <div className="home-content">
                <p className="home-intro">Hello, I'm Abhishek Kumar.</p>
                <div className="h1-wrapper">
                    <h1>I'm an <span className="typing"></span></h1>
                </div>
                <p className="home-subtitle">I design and develop robust firmware solutions for automotive and embedded systems.</p>
                <a href="https://linkedin.com/in/abhishek-kumar-123920201" target="_blank" rel="noopener noreferrer" className="btn">
                    Connect on LinkedIn <i className="fab fa-linkedin"></i>
                </a>
                 <div className="social-links">
                    <a href="https://linkedin.com/in/abhishek-kumar-123920201" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                    <a href="https://leetcode.com/u/abhishekraaz" target="_blank" rel="noopener noreferrer" aria-label="Leetcode"><i className="fas fa-code"></i></a>
                    <a href="https://github.com/raazabhi" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
                </div>
            </div>
        </section>

        <section className="about" id="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-flex-container">
                    <div className="about-image-wrapper">
                        <img src="/images/profile-1.jpg" alt="Abhishek Kumar" className="profile-photo" />
                    </div>
                    <div className="about-content">
                        <p>
                            As an <strong>Embedded Software Engineer with over 2 years of proven experience</strong>, I specialize in high-performance automotive firmware development. My expertise includes <strong>C programming, FreeRTOS, and advanced automotive protocols like AUTOSAR and SOME/IP</strong>.
                        </p>
                        <p>
                            I am recognized for my <strong>high productivity and efficiency</strong>, consistently contributing to critical project successes. My approach emphasizes <strong>clean code, effective debugging, and thorough validation</strong> to ensure the highest quality firmware.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="skills" id="skills">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-grid">
                    <div className="skill-category">
                        <h3>Languages & Scripting</h3>
                        <p>C, Python (basic), Linux Shell, Windows Batch</p>
                    </div>
                    <div className="skill-category">
                        <h3>Platforms & OS</h3>
                        <p>FreeRTOS, Embedded Linux, ADSP SC594, STM32</p>
                    </div>
                    <div className="skill-category">
                        <h3>Automotive & Protocols</h3>
                        <p>AUTOSAR, SOME/IP, Google Protocol Buffers</p>
                    </div>
                    <div className="skill-category">
                        <h3>Tools & Development</h3>
                        <p>Git, GitLab CI, VectorCAST, Klocwork, JIRA, DLT, Robot Framework, Makefiles</p>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="experience" id="experience">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">June 2023 - Present</div>
                        <div className="timeline-content">
                            <h3>Embedded Software Engineer</h3>
                            <p className="company">Zilogic Systems, Chennai, India</p>
                            <p className="award">
                                <i className="fas fa-star"></i>
                                <strong>Awarded STAR EMPLOYEE</strong> for consistently outstanding performance and critical contributions.
                            </p>
                            <ul>
                                <li><strong>Led the ADSP BSW project</strong>, ensuring successful development and delivery.</li>
                                <li><strong>Optimized bootloader functionality on ADSP-SC594 DSPs</strong> to improve startup performance.</li>
                                <li><strong>Developed a robust C-based Life Cycle Manager (LCM) module on FreeRTOS</strong>.</li>
                                <li><strong>Implemented an AUTOSAR-compliant SOME/IP Transport Layer</strong> for reliable inter-ECU communication.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="contact" id="contact">
            <div className="contact-main-content">
                <div className="contact-box">
                    <h2 className="section-title">Get In Touch</h2>
                    <p>I'm currently seeking new opportunities and am open to discussing collaborations or interesting projects.</p>
                    <a href="mailto:abhishekraaz87@gmail.com" className="btn contact-btn">
                        Say Hello <i className="fas fa-envelope"></i>
                    </a>
                    <div className="social-links">
                        <a href="https://linkedin.com/in/abhishek-kumar-123920201" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                        <a href="https://leetcode.com/u/abhishekraaz" target="_blank" rel="noopener noreferrer" aria-label="Leetcode"><i className="fas fa-code"></i></a>
                        <a href="https://github.com/raazabhi" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <p>&copy; 2025 Abhishek Kumar. All Rights Reserved.</p>
            </footer>
        </section>
      </main>
    </>
  );
}

export default Portfolio;