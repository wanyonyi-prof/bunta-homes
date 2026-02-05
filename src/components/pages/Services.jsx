import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../../styles/components/services.css";


import {
  ArrowRight,
  Calendar,
  CheckCircle,
  ChevronRight,
  DollarSign,
  HardHat,
  FileText,
  Shield,
  Users,
  Truck,
  Wallet,
  Phone,
  MessageSquare
} from "lucide-react";

/* =========================
   DATA CONFIG
========================= */

const SERVICE_CATEGORIES = [
  {
    id: 1,
    title: "Engineering Consultancy",
    icon: HardHat,
    description:
      "Professional structural engineering services ensuring safety, compliance, and durability.",
    features: [
      "Structural Analysis",
      "Foundation Design",
      "Building Codes",
      "Site Inspection"
    ],
    services: [
      {
        name: "Structural Design & Analysis",
        time: "2–4 weeks",
        price: "From KES 50,000",
        deliverables: ["Structural Drawings", "Load Calculations", "Safety Reports"]
      },
      {
        name: "Foundation Engineering",
        time: "1–2 weeks",
        price: "From KES 35,000",
        deliverables: ["Soil Analysis", "Foundation Plans", "Material Specs"]
      }
    ]
  },
  {
    id: 2,
    title: "Architectural Design",
    icon: FileText,
    description:
      "Modern architectural solutions with functional layouts and visual excellence.",
    features: ["2D Plans", "3D Renders", "Interior Layouts"],
    services: [
      {
        name: "2D & 3D Architectural Plans",
        time: "2–3 weeks",
        price: "From KES 40,000",
        deliverables: ["Floor Plans", "Elevations", "3D Views"]
      }
    ]
  },
  {
    id: 3,
    title: "Construction Supervision",
    icon: Shield,
    description:
      "Quality control, safety compliance, and professional site management.",
    features: ["Quality Control", "Timeline Management", "Safety Oversight"],
    services: [
      {
        name: "Site Supervision",
        time: "Monthly",
        price: "From KES 80,000",
        deliverables: ["Reports", "Progress Photos", "Site Meetings"]
      }
    ]
  },
  {
    id: 4,
    title: "Skilled Labour",
    icon: Users,
    description:
      "Certified artisans for electrical, plumbing, masonry and finishing works.",
    features: ["Masonry", "Electrical", "Plumbing", "Carpentry"],
    services: [
      {
        name: "Electrical & Plumbing Works",
        time: "Project Based",
        price: "From KES 45,000",
        deliverables: ["Installation", "Testing", "Certification"]
      }
    ]
  },
  {
    id: 5,
    title: "Materials Supply",
    icon: Truck,
    description:
      "Reliable delivery of certified construction materials to your site.",
    features: ["Cement", "Steel", "Aggregates", "Roofing"],
    services: [
      {
        name: "Construction Materials Supply",
        time: "24–48 hours",
        price: "Market Rates",
        deliverables: ["Certified Materials", "Site Delivery"]
      }
    ]
  },
  {
    id: 6,
    title: "Project Financing",
    icon: Wallet,
    description:
      "Construction budgeting, loan guidance, and financial planning.",
    features: ["Loan Support", "Budget Planning", "Cost Estimation"],
    services: [
      {
        name: "Construction Loan Advisory",
        time: "2–3 weeks",
        price: "From KES 20,000",
        deliverables: ["Bank Guidance", "Documentation Support"]
      }
    ]
  }
];

const PROCESS_STEPS = [
  { number: "01", title: "Consultation", description: "Discuss your project requirements" },
  { number: "02", title: "Quotation", description: "Receive detailed cost breakdown" },
  { number: "03", title: "Planning", description: "Design & project timeline setup" },
  { number: "04", title: "Execution", description: "Construction & quality workmanship" },
  { number: "05", title: "Inspection", description: "Quality checks & compliance" },
  { number: "06", title: "Handover", description: "Final delivery & documentation" }
];

/* =========================
   ANIMATION VARIANTS
========================= */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

/* =========================
   MAIN COMPONENT
========================= */

const Services = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <motion.div 
            className="services-hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <nav className="breadcrumb">
              <Link to="/" className="breadcrumb-link">Home</Link>
              <ChevronRight size={16} />
              <span className="breadcrumb-current">Services</span>
            </nav>
            
            <motion.h1 
              className="services-hero-title"
              variants={fadeUp}
            >
              Comprehensive Construction Solutions
            </motion.h1>
            
            <motion.p 
              className="services-hero-subtitle"
              variants={fadeUp}
            >
              From concept to completion, we deliver professional engineering,
              quality construction, and reliable project execution.
            </motion.p>
            
            <motion.div 
              className="hero-stats"
              variants={fadeUp}
            >
              <div className="hero-stat">
                <div className="stat-icon">
                  <HardHat size={24} />
                </div>
                <div className="stat-content">
                  <div className="stat-number">150+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
              </div>
              
              <div className="hero-stat">
                <div className="stat-icon">
                  <Users size={24} />
                </div>
                <div className="stat-content">
                  <div className="stat-number">40+</div>
                  <div className="stat-label">Expert Engineers</div>
                </div>
              </div>
              
              <div className="hero-stat">
                <div className="stat-icon">
                  <CheckCircle size={24} />
                </div>
                <div className="stat-content">
                  <div className="stat-number">98%</div>
                  <div className="stat-label">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="service-categories section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Expertise</span>
            <h2 className="section-title">Comprehensive Construction Services</h2>
            <p className="section-description">
              End-to-end solutions from planning to execution, backed by professional 
              engineering expertise and quality workmanship.
            </p>
          </div>

          <motion.div 
            className="categories-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {SERVICE_CATEGORIES.map((category, index) => {
              const Icon = category.icon;
              const borderClass = 
                index % 6 === 0 ? 'category-blue' :
                index % 6 === 1 ? 'category-green' :
                index % 6 === 2 ? 'category-orange' :
                index % 6 === 3 ? 'category-purple' :
                index % 6 === 4 ? 'category-red' : 'category-teal';
                
              return (
                <motion.div
                  key={category.id}
                  className={`category-card ${borderClass}`}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                >
                  <div className="category-header">
                    <div className="category-icon">
                      <Icon size={32} />
                    </div>
                    <h3 className="category-title">{category.title}</h3>
                    <p className="category-description">{category.description}</p>
                  </div>

                  {/* Features */}
                  <div className="category-features">
                    {category.features.map((feature, idx) => (
                      <span key={idx} className="feature-badge">
                        <CheckCircle size={14} /> {feature}
                      </span>
                    ))}
                  </div>

                  {/* Services List */}
                  <div className="services-list">
                    {category.services.map((service, idx) => (
                      <div key={idx} className="service-item" style={{ '--service-index': idx }}>
                        <div className="service-info">
                          <h4 className="service-name">{service.name}</h4>
                          <div className="service-details">
                            <span className="service-time">
                              <Calendar size={16} /> {service.time}
                            </span>
                            <span className="service-price">
                              <DollarSign size={16} /> {service.price}
                            </span>
                          </div>
                          <div className="service-deliverables">
                            {service.deliverables.map((item, i) => (
                              <span key={i} className="deliverable">{item}</span>
                            ))}
                          </div>
                        </div>
                        <Link to="/booking" className="service-book-btn">
                          Book Now <ArrowRight size={18} />
                        </Link>
                      </div>
                    ))}
                  </div>

                  <Link to="/booking" className="category-cta">
                    View All Services <ArrowRight size={20} />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Process</span>
            <h2 className="section-title">How We Work</h2>
            <p className="section-description">
              A systematic approach ensuring quality, transparency, and timely delivery 
              at every stage of your construction project.
            </p>
          </div>

          <motion.div 
            className="process-steps"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={index}
                className="process-step"
                variants={fadeUp}
                whileHover={{ y: -8 }}
              >
                <div className="step-number">{step.number}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta section">
        <div className="container">
          <div className="cta-content">
            <motion.h2 
              className="cta-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Ready to Start Your Project?
            </motion.h2>
            
            <motion.p 
              className="cta-description"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Book a consultation or talk to our engineering team today. 
              We're ready to bring your vision to life.
            </motion.p>
            
            <motion.div 
              className="cta-buttons"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/booking" className="btn btn-accent">
                <MessageSquare size={20} /> Book Consultation
              </Link>
              <a href="tel:+254712345678" className="btn btn-outline-white">
                <Phone size={20} /> Call Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;