import { useState } from "react";
import { 
  Facebook, Twitter, Instagram, Linkedin, Youtube, 
  Mail, Phone, MapPin, Clock, ArrowUpRight, 
  Send, CheckCircle, Building, Shield, Award 
} from "lucide-react";
import "../../styles/components/footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubscribed(true);
    setEmail("");
    setLoading(false);
    
    // Reset after 3 seconds
    setTimeout(() => setSubscribed(false), 3000);
  };

  const QUICK_LINKS = [
    { name: "Home", path: "/", icon: "🏠" },
    { name: "About Us", path: "/about", icon: "👥" },
    { name: "Services", path: "/services", icon: "🛠️" },
    { name: "Projects", path: "/projects", icon: "🏗️" },
    { name: "Materials Store", path: "/materials", icon: "🛒" },
    { name: "Booking", path: "/booking", icon: "📅" },
    { name: "Contact", path: "/contact", icon: "📞" },
    { name: "FAQ", path: "/faq", icon: "❓" },
  ];

  const SERVICES = [
    { name: "Engineering Consultancy", path: "/services#engineering" },
    { name: "Architectural Design", path: "/services#design" },
    { name: "Construction Supervision", path: "/services#supervision" },
    { name: "Structural Analysis", path: "/services#structural" },
    { name: "Project Management", path: "/services#management" },
    { name: "Skilled Labour", path: "/services#labour" },
    { name: "Materials Supply", path: "/materials" },
    { name: "Quality Inspection", path: "/services#inspection" },
  ];

  const CONTACT_INFO = [
    { icon: <MapPin size={18} />, text: "Kwale, Kenya", link: "https://maps.google.com/?q=Nairobi+Kenya" },
    { icon: <Phone size={18} />, text: "+254 700 520 413", link: "tel:+254700520413" },
    { icon: <Phone size={18} />, text: "+254 774 937 080", link: "tel:+254774937080" },
    { icon: <Mail size={18} />, text: "matemboelijah9@gmail.com", link: "mailto:matemboelijah9@gmail.com" },
    { icon: <Mail size={18} />, text: "support@buntahomes.co.ke", link: "mailto:support@buntahomes.co.ke" },
    { icon: <Clock size={18} />, text: "Mon - Fri: 8:00 AM - 6:00 PM", link: null },
    { icon: <Clock size={18} />, text: "Sat: 9:00 AM - 1:00 PM", link: null },
  ];

  const SOCIAL_LINKS = [
    { platform: "Facebook", icon: <Facebook size={20} />, url: "#", color: "#1877F2" },
    { platform: "Twitter", icon: <Twitter size={20} />, url: "#", color: "#1DA1F2" },
    { platform: "Instagram", icon: <Instagram size={20} />, url: "#", color: "#E4405F" },
    { platform: "LinkedIn", icon: <Linkedin size={20} />, url: "#", color: "#0A66C2" },
    { platform: "YouTube", icon: <Youtube size={20} />, url: "#", color: "#FF0000" },
  ];

  const CERTIFICATIONS = [
    { name: "EBK Registered", icon: <Building size={16} /> },
    { name: "ISO Certified", icon: <Shield size={16} /> },
    { name: "Insured", icon: <Award size={16} /> },
  ];

  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-section company-info">
              <div className="footer-logo">
                <div className="logo-icon">
                  <span className="logo-text">BH</span>
                </div>
                <div className="logo-content">
                  <h3>BUNTA HOMES</h3>
                  <p className="tagline">Engineering Your Dream Home</p>
                </div>
              </div>
              
              <p className="company-description">
                Professional engineering consultancy, skilled labour services, 
                and quality construction materials supplier in Kenya. 
                Building excellence since 2010.
              </p>
              
              <div className="certifications">
                {CERTIFICATIONS.map((cert, index) => (
                  <div key={index} className="certification-item">
                    {cert.icon}
                    <span>{cert.name}</span>
                  </div>
                ))}
              </div>
              
              <div className="social-links">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    className="social-link"
                    aria-label={social.platform}
                    style={{ '--social-color': social.color }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4 className="section-title">Quick Links</h4>
              <ul className="footer-links">
                {QUICK_LINKS.map((link) => (
                  <li key={link.name}>
                    <a href={link.path} className="footer-link">
                      <span className="link-icon">{link.icon}</span>
                      <span>{link.name}</span>
                      <ArrowUpRight size={14} className="link-arrow" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h4 className="section-title">Our Services</h4>
              <ul className="footer-links">
                {SERVICES.map((service) => (
                  <li key={service.name}>
                    <a href={service.path} className="footer-link">
                      <span className="service-bullet"></span>
                      <span>{service.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div className="footer-section">
              <h4 className="section-title">Contact Info</h4>
              <ul className="contact-info">
                {CONTACT_INFO.map((contact, index) => (
                  <li key={index} className="contact-item">
                    <span className="contact-icon">{contact.icon}</span>
                    {contact.link ? (
                      <a href={contact.link} className="contact-link">
                        {contact.text}
                      </a>
                    ) : (
                      <span>{contact.text}</span>
                    )}
                  </li>
                ))}
              </ul>

              {/* Newsletter Subscription */}
              <div className="newsletter">
                <h5 className="newsletter-title">Stay Updated</h5>
                <p className="newsletter-description">
                  Subscribe for construction tips and exclusive offers.
                </p>
                
                <form onSubmit={handleSubscribe} className="subscribe-form">
                  <div className="input-group">
                    <Mail size={18} className="input-icon" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="email-input"
                      required
                      disabled={loading}
                    />
                    <button 
                      type="submit" 
                      className="subscribe-button"
                      disabled={loading || !email}
                    >
                      {loading ? (
                        <span className="loading-spinner"></span>
                      ) : subscribed ? (
                        <CheckCircle size={18} />
                      ) : (
                        <Send size={18} />
                      )}
                    </button>
                  </div>
                  
                  {subscribed && (
                    <div className="success-message">
                      <CheckCircle size={16} />
                      <span>Subscribed successfully!</span>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="bottom-content">
            <div className="copyright">
              <p>
                &copy; {currentYear} <strong>BUNTA HOMES</strong>. All rights reserved. 
                <span className="separator">|</span>
                Engineering Your Dream Home
              </p>
            </div>
            
            <div className="legal-links">
              <a href="/privacy">Privacy Policy</a>
              <span className="separator">•</span>
              <a href="/terms">Terms of Service</a>
              <span className="separator">•</span>
              <a href="/sitemap">Sitemap</a>
            </div>
            
            <div className="developer-credit">
              <span>Designed with</span>
              <span className="heart">❤️</span>
              <span>for Kenya</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <ArrowUpRight size={20} />
      </button>
    </footer>
  );
};

export default Footer;