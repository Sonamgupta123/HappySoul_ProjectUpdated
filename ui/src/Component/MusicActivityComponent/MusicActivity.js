import "./MusicActivity.css";
import { useNavigate } from "react-router-dom";

function MusicActivity() {
  const navigate = useNavigate();

  const songs = [
    { title: "FAASLE – Aditya Rikhari", link: "https://youtu.be/EiiOYwqk3A0?si=inR-CzOpafOa4x16" },
    { title: "Apna Bana Le – Arijit Singh", link: "https://youtu.be/oxoHDrL5_Rc?si=QciCiGG8cRsob4VG" },
    { title: "Saagar Jaisi Aankhon Wali  – Kishore Kumar", link: "https://youtu.be/HpLIPK48a-c?si=L6NI1jTVdEA1sV_d" },
    { title: "Raabta – Arijit Singh", link: "https://youtu.be/vEe-UgJvUHE?si=JABGJLXQXKE0Dq6r" },
    { title: "LONG TIME NO SEE – TAIMOUR BAIG", link: "https://youtu.be/ko7YMs9Q3KU?si=PAWE2XSoNHqqtpbs" },
    { title: "Kabira – Tochi Raina", link: "https://youtu.be/jHNNMj5bNQw" },
    { title: "Finding Her – Kushagra", link: "https://youtu.be/3Cp2QTBZAFQ?si=zzqwAbYyPclXXyHS" },
    { title: "Love Me Like You Do – Ellie Goulding", link: "https://youtu.be/AJtDXIazrMo" },
    { title: "Night Changes – One Direction", link: "https://youtu.be/syFZfO_wfMQ" },
    { title: "Calm Down – Rema", link: "https://youtu.be/WcIcVapfqXw" },
  ];

  const handleBack = () => {
    navigate("/user-activities");
  };

  return (
    <div className="music-container">
      <h1 className="music-title">🎧 Relaxing Music Playlist</h1>
      <p className="music-sub">Enjoy these songs and lift your mood 💚</p>

      <div className="song-list">
        {songs.map((song, index) => (
          <div className="song-card" key={index}>
            <span className="song-name">{index + 1}. {song.title}</span>
            <a href={song.link} target="_blank" rel="noopener noreferrer" className="play-btn">
              ▶ Play
            </a>
          </div>
        ))}
      </div>

      <button className="back-btn" onClick={handleBack}>
        ← Back
      </button>
    </div>
  );
}

export default MusicActivity;
