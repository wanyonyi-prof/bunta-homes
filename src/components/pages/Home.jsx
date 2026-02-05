import { useState, useEffect, useRef } from "react";
import { 
  ArrowRight, CheckCircle, Shield, Award, Play, 
  Star, Users, Clock, TrendingUp, ChevronLeft, 
  ChevronRight, Calendar, Phone, MessageSquare,
  FileText, Home as HomeIcon, Truck, HardHat, Wallet, ThumbsUp
} from "lucide-react";
import { Link } from "react-router-dom";
import "../../styles/components/home.css";

const Home = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [stats, setStats] = useState([
    { value: 0, label: "Projects Completed", target: 50 },
    { value: 0, label: "Years Experience", target: 15 },
    { value: 0, label: "Happy Clients", target: 200 },
    { value: 0, label: "Materials Delivered", target: 1000 },
  ]);
  
  const testimonialRef = useRef(null);
  const statsRef = useRef(null);
  const animationTimersRef = useRef([]);

  const services = [
    { 
      id: 1, 
      title: "Engineering Consultancy", 
      icon: <HardHat size={32} />, 
      description: "Structural design, analysis, and professional engineering solutions",
      features: ["Structural Analysis", "Foundation Design", "Building Codes", "Site Inspection"],
      color: "blue"
    },
    { 
      id: 2, 
      title: "Architectural Design", 
      icon: <FileText size={32} />, 
      description: "Modern house plans with 3D visualization and virtual walkthroughs",
      features: ["2D/3D Plans", "Interior Design", "3D Rendering", "Space Planning"],
      color: "green"
    },
    { 
      id: 3, 
      title: "Construction Supervision", 
      icon: <Shield size={32} />, 
      description: "Quality control, timeline management, and project oversight",
      features: ["Quality Control", "Timeline Management", "Budget Oversight", "Safety Compliance"],
      color: "orange"
    },
    { 
      id: 4, 
      title: "Skilled Labour", 
      icon: <Users size={32} />, 
      description: "Certified masons, electricians, plumbers, carpenters, and painters",
      features: ["Masonry", "Electrical", "Plumbing", "Carpentry", "Painting"],
      color: "purple"
    },
    { 
      id: 5, 
      title: "Materials Supply", 
      icon: <Truck size={32} />, 
      description: "Quality construction materials delivered to your site",
      features: ["Cement & Steel", "Sand & Ballast", "Roofing Materials", "Finishing Materials"],
      color: "red"
    },
    { 
      id: 6, 
      title: "Project Financing", 
      icon: <Wallet size={32} />, 
      description: "Construction loan guidance and financial planning assistance",
      features: ["Loan Applications", "Budget Planning", "Cost Estimation", "Financial Advice"],
      color: "teal"
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "John Kamau",
      role: "Homeowner, Karen",
      content: "BUNTA HOMES transformed our dream into reality. Their attention to detail and professional approach made the entire construction process smooth and stress-free.",
      rating: 5,
      project: "4-Bedroom Villa"
    },
    {
      id: 2,
      name: "Sarah Wanjiku",
      role: "Business Owner, Westlands",
      content: "As a business owner, I needed a reliable partner for our office expansion. BUNTA HOMES delivered on time, within budget, and exceeded our expectations.",
      rating: 5,
      project: "Office Complex"
    },
    {
      id: 3,
      name: "David Ochieng",
      role: "Real Estate Developer",
      content: "I've worked with many contractors, but BUNTA HOMES stands out. Their engineering expertise and quality materials make them my go-to choice for all projects.",
      rating: 5,
      project: "Apartment Complex"
    },
  ];

  const features = [
    {
      icon: <Award size={32} />,
      title: "Certified Engineering",
      description: "All projects supervised by Eng. Mwatembo, registered with EBK. Professional indemnity insured.",
      delay: "0"
    },
    {
      icon: <Shield size={32} />,
      title: "Quality Guaranteed",
      description: "We use only certified materials and follow Kenyan building codes. 5-year structural warranty.",
      delay: "100"
    },
    {
      icon: <CheckCircle size={32} />,
      title: "End-to-End Service",
      description: "From design to materials to construction. Single point of contact eliminates coordination headaches.",
      delay: "200"
    },
    {
      icon: <Clock size={32} />,
      title: "Timely Delivery",
      description: "We respect deadlines. Our project management ensures your project stays on schedule.",
      delay: "300"
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Cost-Effective",
      description: "Transparent pricing with no hidden costs. We help you get the best value for your investment.",
      delay: "400"
    },
    {
      icon: <ThumbsUp size={32} />,
      title: "Customer Support",
      description: "24/7 support throughout your project. We're always available to address your concerns.",
      delay: "500"
    },
  ];

  const projects = [
    { name: "Residential", count: 35, icon: "🏠" },
    { name: "Commercial", count: 12, icon: "🏢" },
    { name: "Industrial", count: 5, icon: "🏭" },
    { name: "Renovation", count: 18, icon: "🔨" },
  ];

  // Animate stats counter - FIXED VERSION
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            stats.forEach((stat, index) => {
              let start = 0;
              const end = stat.target;
              const duration = 2000;
              const increment = end / (duration / 16);
              
              const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                  start = end;
                  clearInterval(timer);
                }
                setStats(prev => {
                  const newStats = [...prev];
                  newStats[index] = { ...newStats[index], value: Math.floor(start) };
                  return newStats;
                });
              }, 16);
              
              animationTimersRef.current[index] = timer;
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );
    
    if (statsRef.current) observer.observe(statsRef.current);
    
    return () => {
      observer.disconnect();
      animationTimersRef.current.forEach(timer => {
        if (timer) clearInterval(timer);
      });
    };
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Helper function to render icons
  const getStatIcon = (index) => {
    switch (index) {
      case 0: return <HomeIcon size={24} />;
      case 1: return <Clock size={20} />;
      case 2: return <Users size={20} />;
      case 3: return <Truck size={20} />;
      default: return <HomeIcon size={24} />;
    }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>🏆 Trusted Since 2010</span>
            </div>
            
            <h1 className="hero-title">
              Engineering Your <span className="text-accent">Dream Home</span> in Kenya
            </h1>
            
            <p className="hero-subtitle">
              From architectural design to quality materials supply – BUNTA HOMES delivers 
              end-to-end construction solutions with precision and professionalism.
            </p>
            
            <div className="hero-buttons">
              <Link to="/booking" className="btn btn-primary btn-lg">
                <Calendar size={20} />
                Book Free Consultation
                <ArrowRight size={20} />
              </Link>
              
              <a href="tel:+254712345678" className="btn btn-secondary btn-lg">
                <Phone size={20} />
                Call Now: +254 712 345 678
              </a>
              
              <button className="btn btn-outline btn-lg video-button">
                <Play size={20} />
                Watch Our Story
              </button>
            </div>
            
            <div className="trust-badges">
              <div className="trust-badge">
                <Award size={20} />
                <span>EBK Certified</span>
              </div>
              <div className="trust-badge">
                <Shield size={20} />
                <span>Fully Insured</span>
              </div>
              <div className="trust-badge">
                <CheckCircle size={20} />
                <span>5-Year Warranty</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated stats */}
        <div className="stats-section" ref={statsRef}>
          <div className="container">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-icon">{getStatIcon(index)}</div>
                  <div className="stat-content">
                    <div className="stat-value">
                      {stat.value}
                      <span className="stat-plus">+</span>
                    </div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Our Expertise</div>
            <h2 className="section-title">Professional Engineering Services</h2>
            <p className="section-description">
              Comprehensive construction solutions tailored for residential, commercial, 
              and industrial projects across Kenya.
            </p>
          </div>
          
          <div className="services-grid">
            {services.map((service) => (
              <div 
                key={service.id} 
                className={`service-card service-card-${service.color}`}
                data-aos="fade-up"
                data-aos-delay={service.id * 100}
              >
                <div className="service-icon-wrapper">
                  <div className="service-icon">{service.icon}</div>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <div className="service-features">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="service-feature">
                      <CheckCircle size={14} />
                      {feature}
                    </span>
                  ))}
                </div>
                
                <Link to={`/services#service-${service.id}`} className="service-link">
                  Learn More
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="section-cta">
            <Link to="/services" className="btn btn-outline">
              View All Services
              <ArrowRight size={18} />
            </Link>
            <Link to="/booking" className="btn btn-primary">
              <MessageSquare size={18} />
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="features-section section bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose BUNTA HOMES</h2>
            <p className="section-description">
              We combine engineering expertise with practical construction experience 
              to deliver exceptional results.
            </p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-card"
                data-aos="fade-up"
                data-aos-delay={feature.delay}
              >
                <div className="feature-icon-wrapper">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="project-types">
            <h3 className="project-types-title">Project Portfolio</h3>
            <div className="project-types-grid">
              {projects.map((project, index) => (
                <div key={index} className="project-type">
                  <span className="project-icon">{project.icon}</span>
                  <div className="project-content">
                    <div className="project-count">{project.count}+</div>
                    <div className="project-name">{project.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Client Stories</div>
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-description">
              Hear from homeowners and businesses who trusted us with their construction projects.
            </p>
          </div>
          
          <div className="testimonials-wrapper" ref={testimonialRef}>
            <div className="testimonials-container">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className={`testimonial-card ${index === activeTestimonial ? 'active' : ''}`}
                >
                  <div className="testimonial-content">
                    <div className="quote-icon">"</div>
                    <p className="testimonial-text">{testimonial.content}</p>
                    
                    <div className="testimonial-rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={20} fill="#FFD700" stroke="#FFD700" />
                      ))}
                    </div>
                    
                    <div className="testimonial-author">
                      <div className="author-info">
                        <h4 className="author-name">{testimonial.name}</h4>
                        <p className="author-role">{testimonial.role}</p>
                        <div className="author-project">
                          <span className="project-label">Project:</span>
                          <span className="project-name">{testimonial.project}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="testimonials-controls">
              <button onClick={prevTestimonial} className="control-btn" aria-label="Previous testimonial">
                <ChevronLeft size={24} />
              </button>
              
              <div className="testimonial-dots">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === activeTestimonial ? 'active' : ''}`}
                    onClick={() => setActiveTestimonial(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button onClick={nextTestimonial} className="control-btn" aria-label="Next testimonial">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2 className="cta-title">Ready to Start Your Project?</h2>
              <p className="cta-description">
                Get a free consultation with our engineering team. No obligation, 
                just professional advice for your construction project.
              </p>
              
              <div className="cta-features">
                <div className="cta-feature">
                  <CheckCircle size={20} />
                  <span>Free Site Visit & Assessment</span>
                </div>
                <div className="cta-feature">
                  <CheckCircle size={20} />
                  <span>Detailed Quotation</span>
                </div>
                <div className="cta-feature">
                  <CheckCircle size={20} />
                  <span>3D Visualization</span>
                </div>
              </div>
            </div>
            
            <div className="cta-buttons">
              <Link to="/booking" className="btn btn-primary btn-xl">
                <Calendar size={22} />
                Book Consultation
              </Link>
              
              <a href="tel:+254712345678" className="btn btn-secondary btn-xl">
                <Phone size={22} />
                Call Now
              </a>
              
              <Link to="/projects" className="btn btn-outline btn-xl">
                <HomeIcon size={22} />
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section section bg-white">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Construction Process</h2>
            <p className="section-description">
              A streamlined approach to ensure your project's success from start to finish.
            </p>
          </div>
          
          <div className="process-steps">
            {[
              { number: "01", title: "Consultation", desc: "Free site assessment & requirements analysis" },
              { number: "02", title: "Design", desc: "Architectural plans & 3D visualization" },
              { number: "03", title: "Quotation", desc: "Transparent pricing & timeline" },
              { number: "04", title: "Construction", desc: "Quality execution with regular updates" },
              { number: "05", title: "Handover", desc: "Final inspection & documentation" },
              { number: "06", title: "Support", desc: "Post-construction warranty & support" },
            ].map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{step.number}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;