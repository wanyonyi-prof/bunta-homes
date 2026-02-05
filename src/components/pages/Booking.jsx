import { useState } from "react";
import { Calendar, MapPin, Phone, User, Mail, MessageSquare } from "lucide-react";
import "../../styles/components/booking.css";

const BookingForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Engineering Consultancy",
    date: "",
    time: "9:00 AM",
    location: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    "Engineering Consultancy",
    "Architectural Design",
    "Construction Supervision",
    "Skilled Labour",
    "Materials Consultation",
    "Project Financing",
    "Site Assessment",
    "Renovation Planning",
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.date) newErrors.date = "Please select a date";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (formData.phone && !/^[0-9+\-\s()]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = "Phone number is invalid";
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
    
    // In production, you would send this to your backend
    // await fetch('/api/bookings', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // });
    
    setIsSubmitting(false);
    onSuccess(formData);
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "Engineering Consultancy",
      date: "",
      time: "9:00 AM",
      location: "",
      message: "",
    });
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <div className="form-grid">
        {/* Name Field */}
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

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            <Mail size={18} />
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`form-input ${errors.email ? 'error' : ''}`}
            placeholder="john@example.com"
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        {/* Phone Field */}
        <div className="form-group">
          <label htmlFor="phone" className="form-label">
            <Phone size={18} />
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`form-input ${errors.phone ? 'error' : ''}`}
            placeholder="+254 712 345 678"
            required
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>

        {/* Service Selection */}
        <div className="form-group">
          <label htmlFor="service" className="form-label">
            <Calendar size={18} />
            Service Required *
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="form-input"
            required
          >
            {services.map((service, index) => (
              <option key={index} value={service}>{service}</option>
            ))}
          </select>
        </div>

        {/* Date Selection */}
        <div className="form-group">
          <label htmlFor="date" className="form-label">
            <Calendar size={18} />
            Preferred Date *
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={`form-input ${errors.date ? 'error' : ''}`}
            min={getTomorrowDate()}
            required
          />
          {errors.date && <span className="error-message">{errors.date}</span>}
        </div>

        {/* Time Selection */}
        <div className="form-group">
          <label htmlFor="time" className="form-label">
            <Calendar size={18} />
            Preferred Time *
          </label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="form-input"
            required
          >
            {timeSlots.map((time, index) => (
              <option key={index} value={time}>{time}</option>
            ))}
          </select>
        </div>

        {/* Location Field */}
        <div className="form-group full-width">
          <label htmlFor="location" className="form-label">
            <MapPin size={18} />
            Project Location *
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className={`form-input ${errors.location ? 'error' : ''}`}
            placeholder="e.g., Karen, Nairobi"
            required
          />
          {errors.location && <span className="error-message">{errors.location}</span>}
        </div>

        {/* Message Field */}
        <div className="form-group full-width">
          <label htmlFor="message" className="form-label">
            <MessageSquare size={18} />
            Project Details (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-input textarea"
            placeholder="Tell us about your project, budget, timeline, and any specific requirements..."
            rows="4"
          />
        </div>
      </div>

      {/* Terms Checkbox */}
      <div className="terms-agreement">
        <input
          type="checkbox"
          id="terms"
          required
          className="terms-checkbox"
        />
        <label htmlFor="terms" className="terms-label">
          I agree to receive communication from BUNTA HOMES regarding my booking and agree to the 
          <a href="/terms" className="terms-link"> Terms of Service</a> and 
          <a href="/privacy" className="terms-link"> Privacy Policy</a>.
        </label>
      </div>

      {/* Submit Button */}
      <button type="submit" className="submit-btn" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <span className="loading-spinner"></span>
            Processing...
          </>
        ) : (
          <>
            <Calendar size={20} />
            Book Free Consultation
          </>
        )}
      </button>

      <p className="form-note">
        * Required fields. We'll contact you within 24 hours to confirm your booking details.
      </p>
    </form>
  );
};

export default BookingForm;