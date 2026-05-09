<<<<<<< HEAD
import { useState } from "react";
import './UserMood.css';
function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState(null);

  const moods = [
    { emoji: "😄", label: "Happy" },
    { emoji: "🙂", label: "Okay" },
    { emoji: "😔", label: "Sad" },
    { emoji: "😟", label: "Anxious" },
    { emoji: "😤", label: "Stressed" },
  ];

  const handleMoodClick = async (mood) => {
    setSelectedMood(mood.label);

    try {
      const res = await fetch("http://localhost:3001/mood/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),  // MUST
        },
        body: JSON.stringify({
          mood: mood.label,
          emoji: mood.emoji
        }),
      });

      const data = await res.json();
      console.log("Mood Response:", data);

      alert("Mood Saved Successfully 😊");
    } catch (error) {
      console.log("Error saving mood:", error);
    }
  };

  return (
    <div className="mood-section">
      <h3>How are you feeling today?</h3>

      <div className="mood-buttons">
        {moods.map((m) => (
          <button
            key={m.label}
            className={`mood-btn ${selectedMood === m.label ? "active" : ""}`}
            onClick={() => handleMoodClick(m)}
          >
            <span className="emoji">{m.emoji}</span>
            <span>{m.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default MoodTracker;
=======
import { useState } from "react";
import './UserMood.css';
function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState(null);

  const moods = [
    { emoji: "😄", label: "Happy" },
    { emoji: "🙂", label: "Okay" },
    { emoji: "😔", label: "Sad" },
    { emoji: "😟", label: "Anxious" },
    { emoji: "😤", label: "Stressed" },
  ];

  const handleMoodClick = async (mood) => {
    setSelectedMood(mood.label);

    try {
      const res = await fetch("http://localhost:3001/mood/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),  // MUST
        },
        body: JSON.stringify({
          mood: mood.label,
          emoji: mood.emoji
        }),
      });

      const data = await res.json();
      console.log("Mood Response:", data);

      alert("Mood Saved Successfully 😊");
    } catch (error) {
      console.log("Error saving mood:", error);
    }
  };

  return (
    <div className="mood-section">
      <h3>How are you feeling today?</h3>

      <div className="mood-buttons">
        {moods.map((m) => (
          <button
            key={m.label}
            className={`mood-btn ${selectedMood === m.label ? "active" : ""}`}
            onClick={() => handleMoodClick(m)}
          >
            <span className="emoji">{m.emoji}</span>
            <span>{m.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default MoodTracker;
>>>>>>> dddd640725d6965bfe90ae355c0707a5a58cdc01
