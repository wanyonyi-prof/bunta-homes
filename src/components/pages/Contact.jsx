import { useState } from "react";
import "../../styles/components/contact.css";
import { 
  Phone, Mail, MapPin, Clock, MessageSquare, 
  Send, CheckCircle, ChevronRight, Facebook, 
  Twitter, Instagram, Linkedin, Youtube,
  PhoneCall, FileText, User, Calendar
} from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Phone Numbers",
      details: [
        { label: "Main Line", value: "+254 712 345 678", link: "tel:+254712345678" },
        { label: "Support", value: "+254 734 567 890", link: "tel:+254734567890" },
        { label: "Emergency", value: "+254 711 234 567", link: "tel:+254711234567" },
      ],
      color: "blue"
    },
    {
      icon: <Mail size={24} />,
      title: "Email Addresses",
      details: [
        { label: "General Inquiries", value: "info@buntahomes.co.ke", link: "mailto:info@buntahomes.co.ke" },
        { label: "Support", value: "support@buntahomes.co.ke", link: "mailto:support@buntahomes.co.ke" },
        { label: "Careers", value: "careers@buntahomes.co.ke", link: "mailto:careers@buntahomes.co.ke" },
      ],
      color: "green"
    },
    {
      icon: <MapPin size={24} />,
      title: "Office Location",
      details: [
        { label: "Head Office", value: "Greenhouse Mall, 5th Floor, Ngong Road, Nairobi" },
        { label: "Showroom", value: "Construction Materials Plaza, Mombasa Road" },
        { label: "Site Office", value: "Available at major project sites" },
      ],
      color: "orange"
    },
    {
      icon: <Clock size={24} />,
      title: "Working Hours",
      details: [
        { label: "Monday - Friday", value: "8:00 AM - 6:00 PM" },
        { label: "Saturday", value: "9:00 AM - 1:00 PM" },
        { label: "Sunday", value: "Emergency Services Only" },
      ],
      color: "purple"
    },
  ];

  const socialLinks = [
    { platform: "Facebook", icon: <Facebook size={20} />, url: "#", color: "#1877F2" },
    { platform: "Twitter", icon: <Twitter size={20} />, url: "#", color: "#1DA1F2" },
    { platform: "Instagram", icon: <Instagram size={20} />, url: "#", color: "#E4405F" },
    { platform: "LinkedIn", icon: <Linkedin size={20} />, url: "#", color: "#0A66C2" },
    { platform: "YouTube", icon: <Youtube size={20} />, url: "#", color: "#FF0000" },
  ];

  const subjects = [
    "General Inquiry",
    "Service Quotation",
    "Project Consultation",
    "Materials Order",
    "Career Opportunity",
    "Partnership",
    "Feedback",
    "Other"
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.subject) newErrors.subject = "Please select a subject";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In production, send to backend
    // await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // });
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setErrors({});
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="contact-page">
      {/* Success Message */}
      {isSubmitted && (
        <div className="success-message">
          <div className="success-content">
            <CheckCircle size={32} />
            <div>
              <h3>Message Sent Successfully!</h3>
              <p>We'll get back to you within 24 hours.</p>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="contact-hero section">
        <div className="container">
          <div className="contact-hero-content">
            <div className="breadcrumb">
              <Link to="/" className="breadcrumb-link">Home</Link>
              <ChevronRight size={16} />
              <span className="breadcrumb-current">Contact Us</span>
            </div>
            
            <h1 className="contact-hero-title">Get in Touch With Us</h1>
            <p className="contact-hero-subtitle">
              Have questions about our services or ready to start your project? 
              We're here to help and would love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info-section section">
        <div className="container">
          <div className="info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className={`info-card info-${info.color}`}>
                <div className="info-icon">{info.icon}</div>
                <h3 className="info-title">{info.title}</h3>
                <div className="info-details">
                  {info.details.map((detail, idx) => (
                    <div key={idx} className="detail-item">
                      <span className="detail-label">{detail.label}:</span>
                      {detail.link ? (
                        <a href={detail.link} className="detail-value">
                          {detail.value}
                        </a>
                      ) : (
                        <span className="detail-value">{detail.value}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main section bg-light">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-container">
              <div className="form-header">
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and we'll get back to you promptly</p>
              </div>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      <User size={18} />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`form-input ${errors.name ? 'error' : ''}`}
                      placeholder="John Mwangi"
                      required
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      <Mail size={18} />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      placeholder="john@example.com"
                      required
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      <Phone size={18} />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="+254 712 345 678"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      <FileText size={18} />
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`form-input ${errors.subject ? 'error' : ''}`}
                      required
                    >
                      <option value="">Select a subject</option>
                      {subjects.map((subject, index) => (
                        <option key={index} value={subject}>{subject}</option>
                      ))}
                    </select>
                    {errors.subject && <span className="error-message">{errors.subject}</span>}
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    <MessageSquare size={18} />
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`form-input textarea ${errors.message ? 'error' : ''}`}
                    placeholder="Tell us about your project, requirements, timeline, and any specific questions..."
                    rows="6"
                    required
                  />
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>
                
                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span className="loading-spinner"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
            
            {/* Sidebar */}
            <div className="contact-sidebar">
              {/* Quick Contact */}
              <div className="sidebar-section">
                <h3 className="sidebar-title">
                  <PhoneCall size={20} />
                  Quick Contact
                </h3>
                <div className="quick-contact">
                  <a href="tel:+254712345678" className="quick-link">
                    <Phone size={20} />
                    <div>
                      <span className="link-label">Call Now</span>
                      <span className="link-value">+254 712 345 678</span>
                    </div>
                  </a>
                  <a href="mailto:info@buntahomes.co.ke" className="quick-link">
                    <Mail size={20} />
                    <div>
                      <span className="link-label">Email Us</span>
                      <span className="link-value">info@buntahomes.co.ke</span>
                    </div>
                  </a>
                  <Link to="/booking" className="quick-link">
                    <Calendar size={20} />
                    <div>
                      <span className="link-label">Book Consultation</span>
                      <span className="link-value">Free Site Visit</span>
                    </div>
                  </Link>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="sidebar-section">
                <h3 className="sidebar-title">Follow Us</h3>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="social-link"
                      style={{ backgroundColor: social.color }}
                      aria-label={social.platform}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
              
              {/* FAQ Preview */}
              <div className="sidebar-section">
                <h3 className="sidebar-title">Common Questions</h3>
                <div className="faq-preview">
                  <div className="faq-item">
                    <h4>How quickly do you respond?</h4>
                    <p>We respond within 24 hours during business days.</p>
                  </div>
                  <div className="faq-item">
                    <h4>Do you offer free consultations?</h4>
                    <p>Yes, free initial consultations including site assessment.</p>
                  </div>
                  <Link to="/faq" className="faq-link">
                    View all FAQs →
                  </Link>
                </div>
              </div>
              
              {/* Map Preview */}
              <div className="sidebar-section">
                <h3 className="sidebar-title">
                  <MapPin size={20} />
                  Visit Our Office
                </h3>
                <div className="map-preview">
                  <div className="map-placeholder">
                    <MapPin size={32} />
                    <p>Greenhouse Mall, Ngong Road</p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Greenhouse+Mall+Ngong+Road+Nairobi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-link"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="departments-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Contact Specific Departments</h2>
            <p className="section-description">
              Reach out directly to the team that can best assist you
            </p>
          </div>
          
          <div className="departments-grid">
            {[
              {
                name: "Engineering Services",
                email: "engineering@buntahomes.co.ke",
                phone: "+254 712 345 671",
                contact: "Eng. John Mwatembo"
              },
              {
                name: "Materials Sales",
                email: "sales@buntahomes.co.ke",
                phone: "+254 712 345 672",
                contact: "Ms. Grace Atieno"
              },
              {
                name: "Project Management",
                email: "projects@buntahomes.co.ke",
                phone: "+254 712 345 673",
                contact: "Mr. David Omondi"
              },
              {
                name: "Customer Support",
                email: "support@buntahomes.co.ke",
                phone: "+254 712 345 674",
                contact: "Support Team"
              },
            ].map((dept, index) => (
              <div key={index} className="department-card">
                <h3 className="department-name">{dept.name}</h3>
                <div className="department-contact">
                  <a href={`mailto:${dept.email}`} className="contact-link">
                    <Mail size={16} />
                    {dept.email}
                  </a>
                  <a href={`tel:${dept.phone}`} className="contact-link">
                    <Phone size={16} />
                    {dept.phone}
                  </a>
                </div>
                <div className="department-person">
                  <span>Contact Person:</span>
                  <strong>{dept.contact}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section section bg-primary text-white">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h2 className="newsletter-title">Stay Updated</h2>
              <p className="newsletter-description">
                Subscribe to our newsletter for construction tips, 
                project updates, and exclusive offers.
              </p>
            </div>
            
            <form className="newsletter-form">
              <div className="input-group">
                <Mail size={20} />
                <input
                  type="email"
                  placeholder="Your email address"
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="newsletter-btn">
                  <Send size={20} />
                  Subscribe
                </button>
              </div>
              <p className="newsletter-note">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Start Your Construction Project?</h2>
              <p className="cta-description">
                Contact us today for a free consultation and detailed quotation. 
                Let's build something amazing together.
              </p>
              <div className="cta-buttons">
                <a href="tel:+254712345678" className="btn btn-primary btn-lg">
                  <Phone size={20} />
                  Call Now
                </a>
                <Link to="/booking" className="btn btn-secondary btn-lg">
                  <Calendar size={20} />
                  Book Consultation
                </Link>
                <Link to="/materials" className="btn btn-outline btn-lg">
                  <FileText size={20} />
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;