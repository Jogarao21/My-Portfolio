import React, { useState, useEffect } from 'react';
import './projects.scss';
import ECommerce from '../assets/E-Commerce.png';
import ScrumImage from '../assets/Scrum-AgileImage.png';
import ClaimAi from '../assets/ClaimAi.png';
import InvoiceDashboard from '../assets/InvoiceDashboard.png';
import MovieMania from '../assets/MovieMania.png';
import Weather from '../assets/Weather.png'

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');

  // Placeholder projects - replace with your actual projects later
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: "I've created a modern, fully functional e-commerce website called StyleHub. The website is ready to use and includes all the essential e-commerce functionality with a premium, modern aesthetic that would make users want to explore and shop. You can customize the products, colors, and branding to match your specific needs!",
      category: 'frontend',
      technologies: ['HTML', 'CSS', 'Javascript', 'React'],
      image: ECommerce,
      githubLink: 'https://github.com/Jogarao21/E-Commerse-Website',
      liveLink: 'https://e-commerse-joga.netlify.app/',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Scrum-Agile',
      description: 'Agile is a flexible software development approach that delivers work in small, continuous improvements based on customer feedback. Scrum is a framework within Agile that organizes work into short cycles called sprints with defined roles and meetings. It promotes collaboration, quick delivery, and regular reflection for improvement.',
      category: 'frontend',
      technologies: ['HTML', 'CSS', 'Java Script'],
      image: ScrumImage,
      githubLink: 'https://github.com/Jogarao21/Scrum-Agile',
      liveLink: 'https://scrum-agile-project.netlify.app/',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Invoice Dashboard',
      description: 'A modern, responsive React-based invoice management dashboard designed for airline invoice processing with AI-powered high-value invoice suggestions and manual review capabilities. A production-ready, feature-rich invoice dashboard that combines modern design with practical functionality for efficient invoice management! 🎉',
      category: 'reactjs',
      technologies: ['JavaScript', 'CSS3', 'API Integration', 'React Js'],
      image: InvoiceDashboard,
      githubLink: 'https://github.com/Jogarao21/Invoice-Dashboard',
      liveLink: 'https://invoice-dashboard-joga.netlify.app/',
      status: 'completed'
    },
    {
      id: 4,
      title: 'Movie Website',
      description: 'MovieMania is a modern, responsive movie discovery website designed with a sleek dark theme and vibrant orange accents. It provides users with an immersive movie browsing experience across multiple film industries and genres. This website successfully combines aesthetic appeal with functional movie discovery features, providing users with an engaging platform to explore movies across different industries and genres.',
      category: 'reactjs',
      technologies: ['HTMML', 'CSS', 'TMBD API KEY', 'REACT JS'],
      image: MovieMania,
      githubLink: 'https://github.com/Jogarao21/Movie-Website',
      liveLink: 'https://movie-website-joga.netlify.app/',
      status: 'completed'
    },
    {
      id: 5,
      title: 'Weather Dashboard',
      description: 'A modern, responsive weather application built with HTML, CSS, and JavaScript that provides comprehensive weather information and forecasts for any city worldwide. This weather dashboard serves as a complete, functional weather application that can be easily customized, extended, or integrated into larger projects. It demonstrates modern web development practices while maintaining simplicity and usability.',
      category: 'frontend',
      technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
      image: Weather,
      githubLink: 'https://github.com/Jogarao21/Weather-Dashboard/tree/main',
      liveLink: 'https://weather-dashboard-joga.netlify.app/',
      status: 'completed'
    },
    {
      id: 6,
      title: 'ClaimAi-Company',
      description: 'ClaimAi is an AI-powered platform designed to revolutionize the claims processing industry through advanced artificial intelligence technology. ClaimAi transforms how insurance claims are handled by leveraging cutting-edge AI algorithms to analyze, process, and manage claims with unprecedented accuracy and speed.',
      category: 'reactjs',
      technologies: ['React js'],
      image: ClaimAi,
      githubLink: 'https://github.com/Jogarao21/ClaimAi-Company',
      liveLink: 'https://claimai-joga.netlify.app/',
      status: 'completed'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'reactjs', name: 'React Js' },
    { id: 'frontend', name: 'Frontend' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleProjects(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectElements = document.querySelectorAll('.project-item');
    projectElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [filteredProjects]);

  const handleFilterChange = (categoryId) => {
    setActiveFilter(categoryId);
    setVisibleProjects([]);
  };

  return (
    <section className="projects">
      <div className="projects__background">
        <div className="projects__bg-element projects__bg-element--1"></div>
        <div className="projects__bg-element projects__bg-element--2"></div>
        <div className="projects__bg-element projects__bg-element--3"></div>
      </div>

      <div className="projects__container">
        {/* Section Header */}
        <div className="projects__header">
          <h2 className="projects__title">
            <span className="projects__title-gradient">My Projects</span>
          </h2>
          <p className="projects__subtitle">
            A showcase of my work and creative solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="projects__filters">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`projects__filter-btn ${
                activeFilter === category.id ? 'projects__filter-btn--active' : ''
              }`}
              onClick={() => handleFilterChange(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects__grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              data-index={index}
              className={`project-item projects__card ${
                visibleProjects.includes(index) ? 'projects__card--visible' : ''
              }`}
            >
              <div className="projects__card-inner">
                {/* Project Image */}
                <div className="projects__image-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="projects__image"
                  />
                  <div className="projects__overlay">
                    <div className="projects__overlay-content">
                      <a
                        href={project.githubLink}
                        className="projects__overlay-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-github"></i>
                        Code
                      </a>
                      <a
                        href={project.liveLink}
                        className="projects__overlay-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-external-link-alt"></i>
                        Live
                      </a>
                    </div>
                  </div>
                  <div className={`projects__status projects__status--${project.status}`}>
                    {project.status === 'completed' ? 'Completed' : 'In Progress'}
                  </div>
                </div>

                {/* Project Content */}
                <div className="projects__content">
                  <h3 className="projects__card-title">{project.title}</h3>
                  <p className="projects__description">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="projects__technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="projects__tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Glow Effect */}
                <div className="projects__card-glow"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Message */}
        <div className="projects__coming-soon">
          <div className="projects__coming-soon-content">
            <h3>More Projects Coming Soon!</h3>
            <p>I'm constantly working on new and exciting projects. Stay tuned for updates!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;