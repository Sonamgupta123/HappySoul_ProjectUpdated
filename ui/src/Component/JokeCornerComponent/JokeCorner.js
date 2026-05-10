import "./JokeCorner.css";
import { useNavigate } from "react-router-dom";

function JokeCorner() {
    const navigate = useNavigate();
  const jokes = [
    // Hindi jokes
    "टीचर: बच्चो, अगर तुम्हारे पास 10 आम हैं और मैं तुमसे 4 ले लूँ, तो कितने बचेंगे?\nबच्चा: 10 ही।",
    "पति: तुम्हें मेरी आदतें पसंद नहीं?\nपत्नी: नहीं।\nपति: तो मैं बदल जाऊँ?\nपत्नी: नहीं, तुम जैसे हो वैसे ही अच्छे हो।",
    "एक आदमी डॉक्टर के पास गया। आदमी: डॉक्टर साहब, मुझे भूलने की बीमारी हो गई है।\nडॉक्टर: कब से?\nआदमी: कब से क्या?",
    "मोहन: पापा, मैं स्कूल नहीं जाऊँगा।\nपापा: क्यों?\nमोहन: क्योंकि आज छुट्टी है।",
    "गोलू: मम्मी, मुझे घर की सजा मत दो।\nमम्मी: क्यों?\nगोलू: क्योंकि मैं स्कूल गया हूँ।",
    
    // English jokes
    "Why don’t scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What do you call fake spaghetti? An impasta!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "What did one wall say to the other? I'll meet you at the corner!"
  ];
   const handleBack = () => {
    navigate("/user-activities");
  };

  return (
    <div className="joke-container">
      <h1 className="joke-title">😂 Joke Corner</h1>
      <p className="joke-sub">Laugh and refresh your mind 💚</p>

      <div className="joke-grid">
        {jokes.map((joke, index) => (
          <div className="joke-card" key={index}>
            <p>{joke}</p>
          </div>
        ))}
      </div>
      <button className="back-btn" onClick={handleBack}>
        ← Back
      </button>
    </div>
  );
}

export default JokeCorner;
