<<<<<<< HEAD
import mongoose from "mongoose";

const moodSchema = mongoose.Schema(
  {
    mood: {
      type: String,
      required: true,
      lowercase: true,
    },
    emoji: {
      type: String,
      required: true,
    },
    userId: {
      type: Number,   // ✅ MUST be Number
      required: true,
    },
  },
  { timestamps: true }
);

const MoodModel = mongoose.model("moods_collection", moodSchema);
export default MoodModel;
=======
import mongoose from "mongoose";

const moodSchema = mongoose.Schema(
  {
    mood: {
      type: String,
      required: true,
      lowercase: true,
    },
    emoji: {
      type: String,
      required: true,
    },
    userId: {
      type: Number,   // ✅ MUST be Number
      required: true,
    },
  },
  { timestamps: true }
);

const MoodModel = mongoose.model("moods_collection", moodSchema);
export default MoodModel;
>>>>>>> dddd640725d6965bfe90ae355c0707a5a58cdc01
