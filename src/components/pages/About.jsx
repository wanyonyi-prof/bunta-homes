import { 
  Award, BookOpen, CheckCircle, ChevronRight, 
  Clock, Globe, GraduationCap, HardHat, 
  Heart, Home, MapPin, Shield, Users 
} from "lucide-react";
import "../../styles/components/about.css";
import { Link } from "react-router-dom";

const About = () => {
  const milestones = [
    { year: "2010", title: "Company Founded", description: "Started as a small engineering consultancy in Nairobi" },
    { year: "2013", title: "First Major Project", description: "Completed 20-unit residential complex in Westlands" },
    { year: "2016", title: "Materials Division", description: "Launched construction materials supply service" },
    { year: "2018", title: "EBK Accreditation", description: "Received full engineering board certification" },
    { year: "2021", title: "Regional Expansion", description: "Extended services to 5 major counties in Kenya" },
    { year: "2024", title: "Digital Transformation", description: "Launched online booking and materials store" },
  ];

  const teamMembers = [
    { name: "Eng. John Mwatembo", role: "Founder & CEO", experience: "20+ years", expertise: "Structural Engineering", image: "👨‍💼" },
    { name: "Eng. Sarah Wambui", role: "Head of Design", experience: "15+ years", expertise: "Architectural Design", image: "👩‍🎨" },
    { name: "Mr. David Omondi", role: "Construction Manager", experience: "18+ years", expertise: "Project Management", image: "👨‍🏭" },
    { name: "Ms. Grace Atieno", role: "Materials Manager", experience: "12+ years", expertise: "Supply Chain", image: "👩‍💼" },
  ];

  const values = [
    { icon: <Shield size={32} />, title: "Integrity", description: "Honest pricing, transparent processes, and ethical practices" },
    { icon: <Award size={32} />, title: "Excellence", description: "Commitment to quality and attention to every detail" },
    { icon: <Heart size={32} />, title: "Passion", description: "Love for building and creating lasting structures" },
    { icon: <Users size={32} />, title: "Collaboration", description: "Working closely with clients to realize their vision" },
    { icon: <BookOpen size={32} />, title: "Innovation", description: "Adopting modern techniques and technologies" },
    { icon: <Globe size={32} />, title: "Sustainability", description: "Eco-friendly materials and sustainable practices" },
  ];

  const certifications = [
    "Engineering Board of Kenya (EBK) Registered",
    "National Construction Authority (NCA) Licensed",
    "ISO 9001:2015 Quality Management Certified",
    "Professional Indemnity Insured",
    "Workers Compensation Insured",
    "5-Year Structural Warranty",
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero section">
        <div className="container">
          <div className="about-hero-content">
            <div className="breadcrumb">
              <Link to="/" className="breadcrumb-link">Home</Link>
              <ChevronRight size={16} />
              <span className="breadcrumb-current">About Us</span>
            </div>
            
            <h1 className="about-hero-title">Building Kenya's Future, One Project at a Time</h1>
            <p className="about-hero-subtitle">
              For over 15 years, BUNTA HOMES has been transforming construction dreams into reality 
              with engineering excellence and unwavering commitment to quality.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section section bg-light">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Our Story</div>
            <h2 className="section-title">From Vision to Reality</h2>
          </div>
          
          <div className="story-content">
            <div className="story-text">
              <h3>Founded on a Dream of Better Construction</h3>
              <p>
                In 2010, Eng. John Matembo recognized a gap in Kenya's construction industry: 
                the need for reliable, end-to-end engineering services that combined technical 
                expertise with practical construction knowledge.
              </p>
              <p>
                What started as a small engineering consultancy has grown into a comprehensive 
                construction solutions provider, serving hundreds of satisfied clients across Kenya.
              </p>
              
              <div className="story-stats">
                <div className="story-stat">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="story-stat">
                  <div className="stat-number">200+</div>
                  <div className="stat-label">Happy Clients</div>
                </div>
                <div className="story-stat">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
              </div>
            </div>
            
            <div className="story-image">
              <div className="image-placeholder">
                <HardHat size={64} />
                <p>Founder's Vision</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="milestones-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Journey</h2>
            <p className="section-description">
              Key milestones in our journey of growth and excellence
            </p>
          </div>
          
          <div className="milestones-timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="milestone-item" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="milestone-year">{milestone.year}</div>
                <div className="milestone-content">
                  <div className="milestone-dot"></div>
                  <h3 className="milestone-title">{milestone.title}</h3>
                  <p className="milestone-description">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section section bg-light">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Our Experts</div>
            <h2 className="section-title">Meet Our Leadership Team</h2>
            <p className="section-description">
              Experienced professionals dedicated to your project's success
            </p>
          </div>
          
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="team-avatar">{member.image}</div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  
                  <div className="team-details">
                    <div className="team-detail">
                      <Clock size={16} />
                      <span>{member.experience} experience</span>
                    </div>
                    <div className="team-detail">
                      <GraduationCap size={16} />
                      <span>{member.expertise}</span>
                    </div>
                  </div>
                  
                  <p className="team-quote">
                    "Committed to building structures that stand the test of time."
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-description">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="value-icon-wrapper">
                  {value.icon}
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="certifications-section section bg-primary text-white">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Certifications & Accreditations</h2>
            <p className="section-description">
              Proof of our commitment to professional standards and quality assurance
            </p>
          </div>
          
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-item" data-aos="fade-up" data-aos-delay={index * 50}>
                <CheckCircle size={24} />
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Build With Us?</h2>
              <p className="cta-description">
                Partner with experienced engineers who understand both the technical 
                and practical aspects of construction in Kenya.
              </p>
              
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  <MapPin size={20} />
                  Visit Our Office
                </Link>
                <Link to="/booking" className="btn btn-secondary btn-lg">
                  <Home size={20} />
                  Start Your Project
                </Link>
              </div>
            </div>
            
            <div className="cta-image">
              <div className="image-placeholder">
                <Award size={64} />
                <p>Your Trusted Partner</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;