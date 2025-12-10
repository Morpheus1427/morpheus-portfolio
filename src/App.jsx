import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import MineImage from './assets/Mine.jpeg';
import { Moon, Sun, Mail, Github, Linkedin, Download, Menu, X, Code, Shield, Award, CheckCircle, Send, Loader, Instagram } from 'lucide-react';
import './App.css';

const MorpheusPortfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState({ loading: false, success: false, error: '' });
  const [typewriterText, setTypewriterText] = useState('');
  
  const roles = ['Cybersecurity Engineer', 'Digital Forensics Specialist', 'Ethical Hacker'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (charIndex < roles[roleIndex].length) {
        setTypewriterText(roles[roleIndex].slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setCharIndex(0);
          setRoleIndex((roleIndex + 1) % roles.length);
        }, 2000);
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [charIndex, roleIndex]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const stats = [
    { label: 'Projects Completed', value: 12, icon: Code },
    { label: 'Skills Mastered', value: 20, icon: Shield },
    { label: 'Certifications', value: 5, icon: Award }
  ];

  const projects = [
    {
      title: 'Network Security Auditor',
      description: 'Automated network vulnerability scanner with real-time threat detection and reporting capabilities.',
      tools: ['Python', 'Nmap', 'Wireshark'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop'
    },
    {
      title: 'Forensic Data Recovery Tool',
      description: 'Digital forensics toolkit for recovering deleted files and analyzing disk artifacts.',
      tools: ['C++', 'Python', 'Autopsy'],
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop'
    },
    {
      title: 'IoT Security Framework',
      description: 'Security framework for protecting IoT devices from common attack vectors and vulnerabilities.',
      tools: ['Bash', 'Burp Suite', 'Genymotion'],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop'
    },
    {
      title: 'AI-Powered Threat Detection',
      description: 'Machine learning model for detecting and classifying security threats in real-time network traffic.',
      tools: ['Python', 'TensorFlow', 'Scikit-learn'],
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop'
    },
    {
      title: 'Incident Response Platform',
      description: 'Comprehensive platform for managing and responding to cybersecurity incidents efficiently.',
      tools: ['React', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&h=250&fit=crop'
    },
    {
      title: 'Penetration Testing Suite',
      description: 'Complete penetration testing toolkit with automated exploit detection and vulnerability assessment.',
      tools: ['Python', 'Metasploit', 'Kali Linux'],
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop'
    }
  ];

  const skills = [
    'Python', 'Bash', 'Wireshark', 'Burp Suite', 'Genymotion', 'TensorFlow',
    'Nmap', 'Metasploit', 'Kali Linux', 'Network Security', 'Ethical Hacking',
    'Digital Forensics', 'Malware Analysis', 'Penetration Testing', 'SIEM Tools',
    'Incident Response', 'Cryptography', 'Cloud Security', 'Risk Assessment', 'Compliance'
  ];

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFormStatus({ loading: false, success: false, error: 'All fields are required' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({ loading: false, success: false, error: 'Invalid email format' });
      return;
    }

    setFormStatus({ loading: true, success: false, error: '' });
    
    // Create mailto link with form data
    const mailtoLink = `mailto:laizermichael8@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    // Open mailto link
    window.location.href = mailtoLink;
    
    // Show success message
    setTimeout(() => {
      setFormStatus({ loading: false, success: true, error: '' });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus({ loading: false, success: false, error: '' }), 3000);
    }, 500);
  };

  const Counter = ({ end, duration = 2 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
      if (isInView) {
        let start = 0;
        const increment = end / (duration * 60);
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 1000 / 60);
        return () => clearInterval(timer);
      }
    }, [isInView, end, duration]);

    return <span ref={ref}>{count}</span>;
  };

  const AnimatedSection = ({ children, delay = 0 }) => {
    return <div>{children}</div>;
  };

  return (
    <div className="portfolio-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-content">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="logo"
          >
            MORPHEUS
          </motion.div>
          
          <div className="nav-links">
            {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="nav-link"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="nav-actions">
            <button onClick={toggleDarkMode} className="theme-toggle">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="mobile-toggle">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mobile-menu"
          >
            {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="mobile-link"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">Michael A. Mohamed</h1>
            <div className="typewriter-container">
              <p className="hero-subtitle">
                {typewriterText}
                <span className="cursor">|</span>
              </p>
            </div>
            <p className="hero-description">
              Passionate about securing digital infrastructure and uncovering forensic insights. 
              Dedicated to delivering robust cybersecurity solutions with expertise in ethical hacking and threat analysis.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="cta-button"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.2}>
                <div className="stat-card">
                  <stat.icon className="stat-icon" size={48} />
                  <div className="stat-value">
                    <Counter end={stat.value} />+
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container-md">
          <AnimatedSection>
            <h2 className="section-title">About Me</h2>
            <div className="about-card">
              <div className="about-grid">
                <div className="profile-container">
                  <div className="profile-wrapper">
                    <div className="profile-image">
                      <img src={MineImage} alt="Michael A. Mohamed" />
                    </div>
                    <div className="profile-badge">
                      <Shield size={24} />
                    </div>
                  </div>
                </div>

                <div className="bio-text">
                  <p>
                    I am a passionate Cybersecurity and Digital Forensics Engineer with hands-on experience in IT systems and security. 
                    I have a proven track record of delivering high-quality technology solutions while ensuring system security and user satisfaction.
                  </p>
                  <p>
                    I specialize in cybersecurity solutions, ethical hacking, and forensic analysis, thriving in environments that challenge 
                    me to secure systems and enhance user experience.
                  </p>
                </div>
              </div>
              
              <div className="info-grid">
                <div>
                  <h3 className="info-title">Education</h3>
                  <div className="info-content">
                    <p className="info-heading">University of Dodoma</p>
                    <p>College of Informatics and Virtual Education</p>
                    <p>Bachelor's in Cyber Security and Digital Forensics Engineering</p>
                    <p className="info-small">
                      Relevant Coursework: Computer Science, Internet and Application Programming, Computer Maintenance, Ethical Hacking
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="info-title">Experience</h3>
                  <p className="info-content">
                    Practical experience in IT systems management and security operations, applying best practices to safeguard 
                    infrastructure while ensuring optimal performance.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Projects</h2>
          </AnimatedSection>
          <div className="projects-grid">
            {projects.map((project, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="project-card">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tools">
                      {project.tools.map((tool, i) => (
                        <span key={i} className="tool-tag">{tool}</span>
                      ))}
                    </div>
                    <button className="project-button">View Project</button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Skills & Technologies</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="skills-container">
              {skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="skill-chip"
                >
                  {skill}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
<section id="contact" className="contact-section">
  <div className="container-sm">
    <h2 className="section-title">Get In Touch</h2>

    <div className="contact-card">
      {/* Form */}
      <div className="form-container">
        <div className="form-group">
          <label>Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
            placeholder="Your Name"
            required
          />
        </div>

        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleFormChange}
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="form-group">
          <label>Subject *</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleFormChange}
            placeholder="Subject"
            required
          />
        </div>

        <div className="form-group">
          <label>Message *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleFormChange}
            rows="5"
            placeholder="Your message here..."
            required
          />
        </div>

        {/* Error / Success Messages */}
        {formStatus.error && (
          <div className="alert alert-error">{formStatus.error}</div>
        )}

        {formStatus.success && (
          <div className="alert alert-success">
            <CheckCircle size={20} />
            Your email client will open. Please send the message from there!
          </div>
        )}

        {/* Submit Button */}
        <button
          onClick={handleFormSubmit}
          disabled={formStatus.loading}
          className="submit-button"
        >
          {formStatus.loading ? (
            <>
              <Loader className="spinner" size={20} />
              Opening...
            </>
          ) : (
            <>
              <Send size={20} />
              Send Message
            </>
          )}
        </button>
      </div>

      {/* Contact Info */}
      <div className="contact-info">
        <div className="contact-grid">
          <div className="contact-item">
            <Mail className="contact-icon" size={24} />
            <p>laizermichael8@gmail.com</p>
          </div>
          <div className="contact-item">
            <p>0749332309</p>
            <p>Arusha, Tanzania</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="social-links">
            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              href="https://github.com/Morpheus1427"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={28} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              href="https://www.linkedin.com/in/michael-laizer-20379634a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={28} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              href="https://www.instagram.com/aemmike27/?next=%2F&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={28} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              href="mailto:laizermichael8@gmail.com"
            >
              <Mail size={28} />
            </motion.a>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cv-button"
          >
            <Download size={20} />
            Download CV
          </motion.button>

          <p className="copyright">© 2024 Michael A. Mohamed. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MorpheusPortfolio;