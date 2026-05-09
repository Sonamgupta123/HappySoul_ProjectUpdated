<<<<<<< HEAD
import HeroSection from "../HeroSectionComponent/HeroSection";
import "./Home.css";
import { motion } from "framer-motion";

function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 60, damping: 12 } }
  };

  return (
    <>
      <HeroSection />

      <section className="events-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Upcoming Events
          </motion.h2>
          
          <motion.div 
            className="events-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.div className="event-card glass-panel" variants={cardVariants}>
              <h3>Meditation Workshop</h3>
              <p>Guided meditation for inner peace & calmness.</p>
              <span>📅 22 January 2026</span>
            </motion.div>

            <motion.div className="event-card glass-panel" variants={cardVariants}>
              <h3>Stress Relief Activities</h3>
              <p>Fun interactive group activities for stress reduction.</p>
              <span>📅 29 January 2026</span>
            </motion.div>

            <motion.div className="event-card glass-panel" variants={cardVariants}>
              <h3>Healing Through Art</h3>
              <p>Express your emotions through creative art therapy.</p>
              <span>📅 Coming Soon</span>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Home;
=======
import HeroSection from "../HeroSectionComponent/HeroSection";
import "./Home.css";
import { motion } from "framer-motion";

function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 60, damping: 12 } }
  };

  return (
    <>
      <HeroSection />

      <section className="events-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Upcoming Events
          </motion.h2>
          
          <motion.div 
            className="events-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.div className="event-card glass-panel" variants={cardVariants}>
              <h3>Meditation Workshop</h3>
              <p>Guided meditation for inner peace & calmness.</p>
              <span>📅 22 January 2026</span>
            </motion.div>

            <motion.div className="event-card glass-panel" variants={cardVariants}>
              <h3>Stress Relief Activities</h3>
              <p>Fun interactive group activities for stress reduction.</p>
              <span>📅 29 January 2026</span>
            </motion.div>

            <motion.div className="event-card glass-panel" variants={cardVariants}>
              <h3>Healing Through Art</h3>
              <p>Express your emotions through creative art therapy.</p>
              <span>📅 Coming Soon</span>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Home;
>>>>>>> dddd640725d6965bfe90ae355c0707a5a58cdc01
