import mongoose from "mongoose";

const CafeSchema = new mongoose.Schema(
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
    photos: {
        type: [String],
        required:true,
    },
    logo: {
      type: String, 
      required: true, 
    },
    description: {
      type: String,
      required: true,
    },
    map:{
        type:String
    },
    reviews: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Review",
      },
    ],
    services: {
        type: [String],
    },
    menu: {
        type: [String],
    },
    socials: {
        type: [String],
    },
    featured: {
      type: Boolean,
      default: false,
    },   
  },
  { timestamps: true }
);

export default mongoose.model("Cafe", CafeSchema);

{/*
 
{
	"name":"Cafe Amine",
	"type":"cafe",
	"city":"Rabat",
	"location":"Agdal - Rabat",
	"distance":"",
	"photos":"",
	"logo":"",
  "description":"We have Great service",
	"map":"",
	"menu":"",
	"reviews":"Modern Cafe",
	"services":"We have Great service",
	"socials":"",
	"featured":""
}

*/}