import './Footer.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

function Footer() {
  const [role, setRole] = useState(localStorage.getItem("role"));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRole(localStorage.getItem("role"));
    }, 300);
    return () => clearInterval(intervalId);
  }, []);

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const currentYear = new Date().getFullYear();

  // If user is logged in (user/admin), show simplified bottom bar
  if (role === "user" || role === "admin") {
    return (
      <footer className="hs-footer-simple">
        <div className="hs-bottom-bar container">
          <p>© {currentYear} HappySoul | Made with 💚 for mental wellness</p>
          <div className="hs-social">
            <i className="bi-twitter"></i>
            <i className="bi-facebook"></i>
            <i className="bi-instagram"></i>
            <i className="bi-linkedin"></i>
            <i className="bi-youtube"></i>
          </div>
        </div>
      </footer>
    );
  }

  // Public Landing Page Footer
  return (
    <motion.footer 
      className="hs-footer-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={footerVariants}
    >
      <div className="container">
        <div className="hs-footer-grid">
          
          <div className="hs-footer-brand">
            <Link to="/" className="text-decoration-none">
              <h2 className="hs-brand-title">HappySoul</h2>
            </Link>
            <p className="hs-brand-tagline">Your mental wellness companion 🌿</p>
            <p className="hs-brand-desc">A safe place to grow emotionally, improve focus, and take care of your mind step by step.</p>
          </div>

          <div className="hs-footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/activities">Activities</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </ul>
          </div>

          <div className="hs-footer-contact">
            <h3>Contact Us</h3>
            <ul>
              <li><Phone size={16} className="me-2"/> +91 98765 43210</li>
              <li><Mail size={16} className="me-2"/> support@happysoul.com</li>
              <li><MapPin size={16} className="me-2"/> IPS Academy, Indore</li>
            </ul>
          </div>
        </div>
      </div>
        
      <div className="hs-bottom-bar-wrapper">
        <div className="hs-bottom-bar container">
          <p>© {currentYear} HappySoul | Made with 💚 for mental wellness</p>
          <div className="hs-social">
            <a href="#"><i className="bi-twitter"></i></a>
            <a href="#"><i className="bi-facebook"></i></a>
            <a href="#"><i className="bi-instagram"></i></a>
            <a href="#"><i className="bi-linkedin"></i></a>
            <a href="#"><i className="bi-youtube"></i></a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
