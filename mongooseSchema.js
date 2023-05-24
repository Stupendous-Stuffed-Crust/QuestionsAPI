import mongoose from 'mongoose';

const { Schema } = mongoose;

const questionSchema = new Schema({
  id: Number,
  product_id: Number,
  body: String,
  date: Date,
  asker_name: String,
  asker_email: String,
  helpfulness: Number,
  reported: Boolean,
  answers: [{
    id: Number,
    body: String,
    date: Date,
    answerer_name: String,
    answerer_email: String,
    helpfulness: Number,
    photos: [{
      id: Number,
      url: String,
    }],
  }],
});

const Question = mongoose.model('Question', questionSchema);
