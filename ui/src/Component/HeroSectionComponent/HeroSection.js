import React, { useState, useEffect } from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    img: "/assets/cr2.png",
    heading: "Build Confidence & Mental Wellness",
    text: "A safe place to grow emotionally, improve focus and take care of your mind."
  },
  {
    img: "/assets/hero.png",
    heading: "Track Your Mood Daily",
    text: "Understand your emotions and improve your mental health step by step."
  },
  {
    img: "/assets/newhero.jpg",
    heading: "Practice Mindfulness",
    text: "Relax, meditate and build a peaceful mindset."
  }
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  // auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-container">
      <div className="hero-content-wrapper">
        <div className="hero-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="hero-text-wrapper"
            >
              <h1>{slides[current].heading}</h1>
              <p>{slides[current].text}</p>
              <Link to="/activities" className="hero-btn glass-btn">
                Start Your Journey
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="hero-right">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={slides[current].img}
              alt="mental wellness"
              className="hero-img"
              initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>
      </div>

      {/* dots */}
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={current === index ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
      <div className="mood-tags">
        <span>🌿 Stress Relief</span>
        <span>🧘 Meditation</span>
        <span>🎵 Calm Music</span>
        <span>😊 Positivity</span>
      </div>
      <p className="hero-quote">
        “Healing begins when you slow down and listen to yourself.”
      </p>

    </section>
  );
};

export default HeroSection;