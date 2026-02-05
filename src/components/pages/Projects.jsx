import { useState, useEffect } from "react";
import { 
  Calendar, ChevronRight, Filter, Home, 
  MapPin, Maximize2, Search, Share2, 
  Users, ChevronLeft, ChevronRight as RightIcon,
  Award, Clock, DollarSign, Building
} from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { id: "all", name: "All Projects", count: 52 },
    { id: "residential", name: "Residential", count: 35 },
    { id: "commercial", name: "Commercial", count: 12 },
    { id: "industrial", name: "Industrial", count: 5 },
  ];

  const years = ["all", "2024", "2023", "2022", "2021", "2020", "2019"];

  const sampleProjects = [
    {
      id: 1,
      title: "Modern Bungalow in Karen",
      category: "residential",
      year: "2024",
      location: "Karen, Nairobi",
      duration: "8 months",
      budget: "KES 12M",
      size: "3,200 sq ft",
      description: "A contemporary 4-bedroom bungalow with open floor plan and sustainable features",
      images: ["🏠", "🛋️", "🍽️", "🛁"],
      features: ["Solar Powered", "Rainwater Harvesting", "Smart Home", "Landscaped Garden"],
      client: "Private Homeowner",
      status: "completed",
      teamSize: 8,
      rating: 4.9
    },
    {
      id: 2,
      title: "Office Complex in Westlands",
      category: "commercial",
      year: "2023",
      location: "Westlands, Nairobi",
      duration: "14 months",
      budget: "KES 85M",
      size: "25,000 sq ft",
      description: "5-story modern office building with retail spaces and underground parking",
      images: ["🏢", "🪑", "🚗", "🌿"],
      features: ["Glass Facade", "Elevators", "Security System", "Backup Power"],
      client: "Real Estate Developer",
      status: "completed",
      teamSize: 15,
      rating: 4.8
    },
    {
      id: 3,
      title: "Warehouse Facility in Mombasa",
      category: "industrial",
      year: "2023",
      location: "Mombasa Road",
      duration: "6 months",
      budget: "KES 45M",
      size: "50,000 sq ft",
      description: "Industrial warehouse with loading bays and office spaces",
      images: ["🏭", "🚚", "📦", "🛠️"],
      features: ["High Ceilings", "Loading Docks", "Fire System", "Office Block"],
      client: "Logistics Company",
      status: "completed",
      teamSize: 12,
      rating: 4.7
    },
    {
      id: 4,
      title: "Apartment Complex in Kilimani",
      category: "residential",
      year: "2022",
      location: "Kilimani, Nairobi",
      duration: "18 months",
      budget: "KES 150M",
      size: "40,000 sq ft",
      description: "8-unit luxury apartment building with amenities",
      images: ["🏘️", "🏊", "🏋️", "🌳"],
      features: ["Swimming Pool", "Gym", "CCTV", "Landscaped Courtyard"],
      client: "Property Developer",
      status: "completed",
      teamSize: 20,
      rating: 4.9
    },
    {
      id: 5,
      title: "Shopping Mall in Nakuru",
      category: "commercial",
      year: "2021",
      location: "Nakuru CBD",
      duration: "24 months",
      budget: "KES 200M",
      size: "80,000 sq ft",
      description: "Two-story shopping mall with anchor stores and food court",
      images: ["🛍️", "🍔", "🎬", "🅿️"],
      features: ["Escalators", "Food Court", "Cinema", "Parking for 300"],
      client: "Mall Developers Ltd",
      status: "completed",
      teamSize: 25,
      rating: 4.8
    },
    {
      id: 6,
      title: "Villa Renovation in Runda",
      category: "residential",
      year: "2024",
      location: "Runda, Nairobi",
      duration: "4 months",
      budget: "KES 8M",
      size: "4,500 sq ft",
      description: "Complete renovation and modernization of existing villa",
      images: ["🔨", "🎨", "🪟", "🌺"],
      features: ["Kitchen Remodel", "Bathroom Upgrade", "New Flooring", "Exterior Paint"],
      client: "Private Homeowner",
      status: "in-progress",
      teamSize: 6,
      rating: 4.7
    },
  ];

  useEffect(() => {
    // In production, fetch from API
    setProjects(sampleProjects);
    setFilteredProjects(sampleProjects);
  }, []);

  useEffect(() => {
    let filtered = [...projects];

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Filter by year
    if (selectedYear !== "all") {
      filtered = filtered.filter(p => p.year === selectedYear);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProjects(filtered);
  }, [selectedCategory, selectedYear, searchTerm, projects]);

  const openProjectDetail = (project) => {
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openLightbox = (projectIndex, imageIndex = 0) => {
    setCurrentImageIndex(imageIndex);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex(prev => 
      (prev + 1) % (selectedProject?.images.length || 1)
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(prev => 
      prev === 0 ? (selectedProject?.images.length || 1) - 1 : prev - 1
    );
  };

  return (
    <div className="projects-page">
      {/* Lightbox Modal */}
      {lightboxOpen && selectedProject && (
        <div className="lightbox-modal">
          <button className="close-lightbox" onClick={() => setLightboxOpen(false)}>
            <span>×</span>
          </button>
          
          <div className="lightbox-content">
            <button className="nav-btn prev" onClick={prevImage}>
              <ChevronLeft size={32} />
            </button>
            
            <div className="lightbox-image">
              {selectedProject.images[currentImageIndex]}
              <div className="image-counter">
                {currentImageIndex + 1} / {selectedProject.images.length}
              </div>
            </div>
            
            <button className="nav-btn next" onClick={nextImage}>
              <RightIcon size={32} />
            </button>
          </div>
          
          <div className="lightbox-caption">
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="projects-hero section">
        <div className="container">
          <div className="projects-hero-content">
            <div className="breadcrumb">
              <Link to="/" className="breadcrumb-link">Home</Link>
              <ChevronRight size={16} />
              <span className="breadcrumb-current">Our Projects</span>
            </div>
            
            <h1 className="projects-hero-title">Portfolio of Excellence</h1>
            <p className="projects-hero-subtitle">
              Showcasing our completed construction projects across Kenya. 
              Each project tells a story of quality, innovation, and client satisfaction.
            </p>
            
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat">
                <div className="stat-number">15+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat">
                <div className="stat-number">98%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Detail View */}
      {selectedProject && (
        <section className="project-detail section">
          <div className="container">
            <div className="detail-header">
              <button className="back-btn" onClick={() => setSelectedProject(null)}>
                <ChevronLeft size={20} />
                Back to Projects
              </button>
              <h2 className="detail-title">{selectedProject.title}</h2>
            </div>
            
            <div className="detail-grid">
              {/* Project Images */}
              <div className="detail-images">
                <div className="main-image" onClick={() => openLightbox(selectedProject.id, 0)}>
                  {selectedProject.images[0]}
                  <button className="expand-btn">
                    <Maximize2 size={20} />
                  </button>
                </div>
                <div className="thumbnail-grid">
                  {selectedProject.images.slice(1).map((image, index) => (
                    <div
                      key={index}
                      className="thumbnail"
                      onClick={() => openLightbox(selectedProject.id, index + 1)}
                    >
                      {image}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Project Info */}
              <div className="detail-info">
                <div className="project-meta">
                  <div className="meta-item">
                    <Calendar size={18} />
                    <div>
                      <span className="meta-label">Year Completed</span>
                      <span className="meta-value">{selectedProject.year}</span>
                    </div>
                  </div>
                  <div className="meta-item">
                    <MapPin size={18} />
                    <div>
                      <span className="meta-label">Location</span>
                      <span className="meta-value">{selectedProject.location}</span>
                    </div>
                  </div>
                  <div className="meta-item">
                    <Clock size={18} />
                    <div>
                      <span className="meta-label">Duration</span>
                      <span className="meta-value">{selectedProject.duration}</span>
                    </div>
                  </div>
                  <div className="meta-item">
                    <DollarSign size={18} />
                    <div>
                      <span className="meta-label">Budget</span>
                      <span className="meta-value">{selectedProject.budget}</span>
                    </div>
                  </div>
                  <div className="meta-item">
                    <Home size={18} />
                    <div>
                      <span className="meta-label">Size</span>
                      <span className="meta-value">{selectedProject.size}</span>
                    </div>
                  </div>
                  <div className="meta-item">
                    <Users size={18} />
                    <div>
                      <span className="meta-label">Team Size</span>
                      <span className="meta-value">{selectedProject.teamSize} people</span>
                    </div>
                  </div>
                </div>
                
                <div className="project-description">
                  <h3>Project Overview</h3>
                  <p>{selectedProject.description}</p>
                </div>
                
                <div className="project-features">
                  <h3>Key Features</h3>
                  <div className="features-grid">
                    {selectedProject.features.map((feature, index) => (
                      <div key={index} className="feature-item">
                        <Award size={16} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="project-client">
                  <h3>Client Testimonial</h3>
                  <div className="testimonial">
                    <p>"BUNTA HOMES delivered exceptional quality and stayed within budget. 
                    Their attention to detail and professional approach made the entire 
                    process smooth and stress-free."</p>
                    <div className="client-info">
                      <strong>{selectedProject.client}</strong>
                      <span>Project Rating: {selectedProject.rating}/5</span>
                    </div>
                  </div>
                </div>
                
                <div className="project-actions">
                  <button className="btn btn-primary">
                    <Share2 size={20} />
                    Share Project
                  </button>
                  <Link to="/contact" className="btn btn-outline">
                    <MessageSquare size={20} />
                    Start Similar Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Projects Grid (shown when no project selected) */}
      {!selectedProject && (
        <>
          {/* Filters Section */}
          <section className="projects-filters section bg-light">
            <div className="container">
              <div className="filters-grid">
                <div className="search-container">
                  <Search size={20} />
                  <input
                    type="text"
                    placeholder="Search projects by location, type, or feature..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                  />
                </div>
                
                <div className="filter-options">
                  <div className="filter-group">
                    <Filter size={18} />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      {categories.map(cat => (
                        <option key={cat.id} value={cat.id}>
                          {cat.name} ({cat.count})
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="filter-group">
                    <Calendar size={18} />
                    <select
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(e.target.value)}
                    >
                      {years.map(year => (
                        <option key={year} value={year}>
                          {year === "all" ? "All Years" : year}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Grid */}
          <section className="projects-grid-section section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">Featured Projects</h2>
                <p className="section-description">
                  {filteredProjects.length} projects found
                </p>
              </div>
              
              <div className="projects-grid">
                {filteredProjects.map(project => (
                  <div key={project.id} className="project-card">
                    <div className="project-image" onClick={() => openProjectDetail(project)}>
                      {project.images[0]}
                      {project.status === "in-progress" && (
                        <div className="status-badge ongoing">In Progress</div>
                      )}
                      <div className="image-overlay">
                        <button className="view-btn">
                          View Project
                        </button>
                      </div>
                    </div>
                    
                    <div className="project-content">
                      <div className="project-category">
                        <Building size={16} />
                        {project.category}
                      </div>
                      
                      <h3 className="project-title" onClick={() => openProjectDetail(project)}>
                        {project.title}
                      </h3>
                      
                      <p className="project-description">{project.description}</p>
                      
                      <div className="project-meta">
                        <div className="meta-item">
                          <MapPin size={14} />
                          <span>{project.location}</span>
                        </div>
                        <div className="meta-item">
                          <Calendar size={14} />
                          <span>{project.year}</span>
                        </div>
                        <div className="meta-item">
                          <DollarSign size={14} />
                          <span>{project.budget}</span>
                        </div>
                      </div>
                      
                      <div className="project-features">
                        {project.features.slice(0, 2).map((feature, index) => (
                          <span key={index} className="feature-tag">
                            {feature}
                          </span>
                        ))}
                        {project.features.length > 2 && (
                          <span className="more-features">
                            +{project.features.length - 2} more
                          </span>
                        )}
                      </div>
                      
                      <div className="project-actions">
                        <button
                          className="btn btn-outline"
                          onClick={() => openProjectDetail(project)}
                        >
                          View Details
                        </button>
                        <Link to="/contact" className="btn btn-text">
                          Get Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {filteredProjects.length === 0 && (
                <div className="no-projects">
                  <Search size={48} />
                  <h3>No projects found</h3>
                  <p>Try adjusting your search or filters</p>
                  <button
                    className="btn btn-outline"
                    onClick={() => {
                      setSelectedCategory("all");
                      setSelectedYear("all");
                      setSearchTerm("");
                    }}
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* CTA Section */}
          <section className="projects-cta section">
            <div className="container">
              <div className="cta-card">
                <div className="cta-content">
                  <h2 className="cta-title">Ready to Start Your Project?</h2>
                  <p className="cta-description">
                    Let's add your project to our portfolio. Contact us for a 
                    free consultation and detailed proposal.
                  </p>
                  <div className="cta-buttons">
                    <Link to="/contact" className="btn btn-primary">
                      <MessageSquare size={20} />
                      Start Your Project
                    </Link>
                    <Link to="/services" className="btn btn-outline">
                      <Home size={20} />
                      View Our Services
                    </Link>
                  </div>
                </div>
                <div className="cta-image">
                  <div className="image-placeholder">
                    <Award size={64} />
                    <p>Your Project Here</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Projects;