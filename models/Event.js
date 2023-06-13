import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
        type: String,
        required: true,
    },
    city: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
        type: String,
        required: true,
    },
    photo: {
        type: [String],
        required:true,
    },
    price: {
        type: Number,
        required: true,
    },
    socials: {
        type: [String],
    },
    featured: {
      type: Boolean,
      default: false,
    },  
    date: {
        type: String,    
      },  
  },
  { timestamps: true }
);

export default mongoose.model("Event", );