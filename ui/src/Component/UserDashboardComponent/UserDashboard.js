import "./UserDashboard.css";
import MoodTracker from "../UserMoodComponent/UserMood";
import { motion } from "framer-motion";

function UserDashboard() {
  const name = localStorage.getItem("name") || "User";

  const quotes = [
    "You are stronger than you think.",
    "One step at a time. You got this 💚",
    "Your feelings are valid.",
    "Breathe. Relax. Reset.",
    "Be kind to yourself today.",
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } }
  };

  return (
    <div className="user-dashboard-wrapper">
      <motion.div 
        className="dashboard container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Welcome Banner */}
        <motion.div className="welcome-banner glass-panel" variants={itemVariants}>
          <h2>Welcome back, {name}! 💚</h2>
          <p>Hope you're taking care of yourself today.</p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <MoodTracker />
        </motion.div>

        <div className="dashboard-grid">
          {/* Fake Recent Progress */}
          <motion.div className="progress-section glass-panel" variants={itemVariants}>
            <h3>Your Recent Progress</h3>
            <ul>
              <li><i className="bi-check-circle-fill"></i> Completed 3 meditation sessions this week</li>
              <li><i className="bi-check-circle-fill"></i> Mood checked-in 5 times</li>
              <li><i className="bi-check-circle-fill"></i> Joined 2 wellness activities</li>
            </ul>
          </motion.div>

          {/* Daily Quote */}
          <motion.div className="quote-box glass-panel" variants={itemVariants}>
            <h3>🌟 Daily Positive Quote</h3>
            <p className="quote-text">"{randomQuote}"</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default UserDashboard;
