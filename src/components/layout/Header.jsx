import { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom"; // <-- ADD THIS IMPORT
import "../../styles/components/header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NAV_ITEMS = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services", hasDropdown: true },
    { name: "Booking", path: "/booking", highlight: true },
    { name: "Materials", path: "/materials" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const SERVICES_SUBMENU = [
    { name: "Engineering Consultancy", path: "/services#engineering" },
    { name: "Architectural Design", path: "/services#design" },
    { name: "Construction Supervision", path: "/services#supervision" },
    { name: "Skilled Labour", path: "/services#labour" },
    { name: "Materials Supply", path: "/services#materials" },
  ];

  const handleNavClick = (name) => {
    setActiveLink(name);
    setIsMenuOpen(false);
  };

  return (
    <header className={`main-header ${scrolled ? "scrolled" : ""}`}>
      {/* Top Contact Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="contact-info">
            <div className="contact-item">
              <Phone size={14} />
              <a href="tel:+254700520413">+254 700 520 413</a>
            </div>
            <div className="contact-item">
              <MapPin size={14} />
              <span>Kwale, Kenya</span>
            </div>
            <div className="contact-item hidden lg:flex">
              <span className="text-accent">•</span>
              <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
            </div>
          </div>
          <a href="/booking" className="quote-button">
            Get Free Quote
          </a>
        </div>
      </div>

      <div className="nav-main container">
        {/* Main Navigation */}
        <div className="nav-container">
          {/* Logo */}
          {/* Logo */}
<Link to="/" className="logo-container">
  {/* Replace "YOUR_ACTUAL_FILENAME.EXT" with your logo's real name */}
  <img 
    src="/images/hero/logo.jpg"
    alt="BUNTA HOMES Logo"
    className="logo-image"
  />
  <div className="logo-text">
    <h1>BUNTA HOMES</h1>
    <p>Engineering Your Dream Home</p>
  </div>
</Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item.name} className="nav-item">
                  <Link
                    to={item.path}
                    className={`nav-link ${activeLink === item.name ? "active" : ""} ${item.highlight ? "highlight" : ""}`}
                    onClick={() => handleNavClick(item.name)}
                  >
                    {item.name}
                    {item.hasDropdown && <ChevronDown size={16} className="dropdown-icon" />}
                  </Link>
                  {item.name === "Services" && (
                    <div className="dropdown-menu">
                      {SERVICES_SUBMENU.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="dropdown-item"
                          onClick={() => handleNavClick("Services")}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="mobile-nav">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`mobile-nav-link ${activeLink === item.name ? "active" : ""}`}
                  onClick={() => handleNavClick(item.name)}
                >
                  {item.name}
                </Link>
                {item.name === "Services" && (
                  <div className="mobile-submenu">
                    {SERVICES_SUBMENU.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="mobile-submenu-item"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
            <li className="mobile-contact-info">
              <div className="contact-item">
                <Phone size={16} />
                <a href="tel:+254700520413">+254 700 520 413</a>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>Kwale, Kenya</span>
              </div>
              <Link to="/booking" className="mobile-quote-button">
                Get Free Quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;