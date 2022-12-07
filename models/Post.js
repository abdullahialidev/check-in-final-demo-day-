const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({

  grade: {
    type: String,
    required: true,
  },
  mood: {
    type: String,
    required: true,
  },
  reviewStatus: { 
    type: String,
    required: true,
    default: 'pending'
  },
  studentName: { 
    type: String,
    required: true,
  },
  entryDate: { 
    type: String,
    required: true,
  },
  message: { 
    type: String,
    required: true,
    default: " " 
  }
  
});

module.exports = mongoose.model("studentInfo", PostSchema); 
