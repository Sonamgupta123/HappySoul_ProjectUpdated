import './Nav.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Activity, User, Phone, LogOut, LogIn, UserPlus, FileText, Smile } from 'lucide-react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [role, setRole] = useState(localStorage.getItem("role"));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const intervalId = setInterval(() => {
      setRole(localStorage.getItem("role"));
    }, 300);

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearInterval(intervalId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const navClass = `navbar navbar-expand-lg floating-nav ${scrolled ? 'scrolled' : ''}`;

  if (role === "user") {
    return (
      <div className="nav-wrapper">
        <motion.nav initial="hidden" animate="visible" variants={navVariants} className={navClass}>
          <div className="container-fluid px-4">
            <Link className="navbar-brand" to="/user">
              <span>HappySoul<small>Find peace within</small></span>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto align-items-center">
                <li className="nav-item">
                  <Link to="/user" className="nav-link d-flex align-items-center"><Home size={18} className="me-2"/> Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/user-activities" className="nav-link d-flex align-items-center"><Activity size={18} className="me-2"/> Activities</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle d-flex align-items-center" href="#" id="profileDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <User size={18} className="me-2"/> Profile
                  </a>
                  <ul className="dropdown-menu border-0 shadow-sm" aria-labelledby="profileDropdown">
                    <li><Link className="dropdown-item" to="/edit-profile">Edit Profile</Link></li>
                    <li><Link className="dropdown-item" to="/change-password">Change Password</Link></li>
                  </ul>
                </li>
                <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
                  <Link to="/logout" className="nav-link custom-btn d-flex align-items-center"><LogOut size={18} className="me-2"/> Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </motion.nav>
      </div>
    );
  } else if (role === "admin") {
    return (
      <div className="nav-wrapper">
        <motion.nav initial="hidden" animate="visible" variants={navVariants} className={navClass}>
          <div className="container-fluid px-4">
            <Link className="navbar-brand" to="/admin">
              <span>HappySoul Admin<small>Manage Platform</small></span>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto align-items-center">
                <li className="nav-item">
                  <Link to="/admin" className="nav-link d-flex align-items-center"><Home size={18} className="me-2"/> Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/mood-tracker" className="nav-link d-flex align-items-center"><Smile size={18} className="me-2"/> Mood Tracker</Link>
                </li>
                <li className="nav-item">
                  <Link to="/queries" className="nav-link d-flex align-items-center"><FileText size={18} className="me-2"/> Queries</Link>
                </li>
                <li className="nav-item dropdown">
                  <span className="nav-link dropdown-toggle d-flex align-items-center" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ cursor: "pointer" }}>
                    <User size={18} className="me-2"/> Profile
                  </span>
                  <ul className="dropdown-menu dropdown-menu-end border-0 shadow-sm">
                    <li><Link to="/admin-profile-edit" className="dropdown-item">Edit Profile</Link></li>
                    <li><Link to="/admin-profile" className="dropdown-item">Change Password</Link></li>
                  </ul>
                </li>
                <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
                  <Link to="/logout" className="nav-link custom-btn d-flex align-items-center"><LogOut size={18} className="me-2"/> Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </motion.nav>
      </div>
    );
  } else {
    return (
      <div className="nav-wrapper">
        <motion.nav initial="hidden" animate="visible" variants={navVariants} className={navClass}>
          <div className="container-fluid px-4">
            <Link className="navbar-brand" to="/">
              <span>HappySoul<br/><small>Your mental wellness companion</small></span>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto align-items-center">
                <li className="nav-item"><Link to="/" className="nav-link d-flex align-items-center"><Home size={18} className="me-2"/> Home</Link></li>
                <li className="nav-item"><Link to="/contact" className="nav-link d-flex align-items-center"><Phone size={18} className="me-2"/> Contact</Link></li>
                <li className="nav-item"><Link to="/activities" className="nav-link d-flex align-items-center"><Activity size={18} className="me-2"/> Activities</Link></li>
                <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
                  <Link to="/login" className="nav-link custom-btn d-flex align-items-center"><LogIn size={18} className="me-2"/> Login</Link>
                </li>
                <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
                  <Link to="/register" className="nav-link custom-btn-primary d-flex align-items-center"><UserPlus size={18} className="me-2"/> Register</Link>
                </li>
              </ul>
            </div>
          </div>
        </motion.nav>
      </div>
    );
  }
}

export default Navbar;
