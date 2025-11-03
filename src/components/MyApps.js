import React from 'react';
import { Link } from 'react-router-dom';
import '../projects.css'; // Reuse the projects page styles
import '../myapps.css'; // Import the specific styles for MyApps page

const MyApps = () => {
  // App data based on the installers available
  const mobileApps = [
    {
      id: 'dockeep',
      title: 'DocKeep',
      description: 'Android application built with Kotlin for storing and organizing personal documents locally. Features Material Design and dark/light themes.',
      version: '1.0.0',
      size: '14.7 MB',
      type: 'APK',
      downloadLink: '/installers/app%20installer/DocKeep.apk',
      image: '/images/DocKeep.png',
      features: ['Document Storage', 'Material Design', 'Dark/Light Themes', 'Local Storage'],
      stats: [
        { icon: 'fas fa-mobile-alt', text: 'Android App' },
        { icon: 'fas fa-weight-hanging', text: '14.7 MB' }
      ]
    }
  ];

  const windowsApps = [
    {
      id: 'fileorganizer',
      title: 'FileOrganizer',
      description: 'Desktop application built with Python for organizing and managing files on Windows systems. Features file browsing and advanced sorting.',
      version: '1.0.0',
      size: '34.6 MB',
      type: 'EXE',
      downloadLink: '/installers/windows%20installer/FileOrganizer.exe',
      image: '/images/FileOrganizer.png',
      features: ['File Management', 'Advanced Sorting', 'File Browsing', 'Windows Integration'],
      stats: [
        { icon: 'fas fa-desktop', text: 'Windows App' },
        { icon: 'fas fa-weight-hanging', text: '34.6 MB' }
      ]
    },
    {
      id: 'projecttodo',
      title: 'Project To-Do Manager',
      description: 'Desktop application built with Electron.js for organizing tasks within different projects. Features drag-and-drop functionality and dark/light themes.',
      version: '1.0.0',
      size: '72.5 MB',
      type: 'EXE',
      downloadLink: '/installers/windows%20installer/Project%20To-Do%20Manager%20Setup%201.0.0.exe',
      image: '/images/Project-To-Do-Manager.png',
      features: ['Task Management', 'Drag & Drop', 'Project Organization', 'Dark/Light Themes'],
      stats: [
        { icon: 'fas fa-tasks', text: 'Task Management' },
        { icon: 'fas fa-weight-hanging', text: '72.5 MB' }
      ]
    }
  ];

  // Function to render app cards
  const renderAppCards = (apps) => (
    <div className="projects-grid app-cards-grid">
      {apps.map((app) => (
        <div key={app.id} className="project-card" data-category={app.type.toLowerCase()}>
          <div className="project-image">
            {app.image ? (
              <img src={app.image} alt={app.title} />
            ) : (
              <div className="project-placeholder">
                <i className={`fas ${app.type === 'APK' ? 'fa-mobile-alt' : 'fa-desktop'}`}></i>
              </div>
            )}
            <div className="project-overlay">
              <div className="project-actions">
                <a 
                  href={app.downloadLink} 
                  className="action-btn" 
                  data-tooltip={`Download ${app.title}`}
                  download
                >
                  <i className="fas fa-download"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="project-content">
            <div className="project-category">
              <i className={`fas ${app.type === 'APK' ? 'fa-android' : 'fa-windows'}`}></i>
              {app.type} Application
            </div>
            <h3 className="project-title">{app.title}</h3>
            <p className="project-description">{app.description}</p>
            
            {/* Adding project stats like in Projects page */}
            <div className="project-stats">
              {app.stats.map((stat, index) => (
                <div key={index} className="stat">
                  <i className={stat.icon}></i>
                  <span>{stat.text}</span>
                </div>
              ))}
            </div>
            
            <div className="project-tech">
              {app.features.map((feature, index) => (
                <span key={index} className="tech-tag">{feature}</span>
              ))}
            </div>
            
            <div className="app-download-button">
              <a 
                href={app.downloadLink} 
                className="btn-primary"
                download
              >
                <i className="fas fa-download"></i>
                Download {app.type}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="starfield">
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
        </div>
        
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="title-main">My Applications</span>
              <span className="title-subtitle">Download & Install</span>
            </h1>
            <p className="hero-description">
              Explore my collection of mobile and desktop applications. All apps are free to download and use. 
              Simply click the download button to get started with any application.
            </p>
          </div>
        </div>
      </section>

      {/* Apps Sections - Two Column Layout */}
      <section className="projects-grid-section">
        <div className="container">
          <div className="apps-layout">
            {/* Left Column - Mobile Apps */}
            <div className="apps-column">
              <h2 className="category-title">
                <i className="fas fa-mobile-alt"></i>
                Mobile Applications
              </h2>
              {renderAppCards(mobileApps)}
            </div>
            
            {/* Right Column - Windows Apps */}
            <div className="apps-column">
              <h2 className="category-title">
                <i className="fas fa-desktop"></i>
                Windows Applications
              </h2>
              {renderAppCards(windowsApps)}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Want to See More?</h2>
            <p>Check out my other projects and see what else I've been working on!</p>
            <div className="cta-buttons">
              <Link to="/projects" className="btn-primary" data-tooltip="View all projects">
                <i className="fas fa-laptop-code"></i>
                View Projects
              </Link>
              <a href="https://github.com/Deveshsamant" target="_blank" rel="noopener noreferrer" className="btn-secondary" data-tooltip="View my code">
                <i className="fab fa-github"></i>
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyApps;