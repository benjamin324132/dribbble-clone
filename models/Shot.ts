import mongoose from "mongoose";
import { type } from "os";

const Schema = mongoose.Schema;

const shotSchema = new Schema({
  img: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  userAvatar: {
    type: String,
  },
  userName: {
    type: String,
  },
  userId: {
    type: String,
  },
  likeCount: {
    type: Number,
  },
  viewCount: {
    type: Number,
  },
},{
    timestamps: true
});

const Shot = mongoose.models.Shot || mongoose.model("Shot", shotSchema);
export default Shot;