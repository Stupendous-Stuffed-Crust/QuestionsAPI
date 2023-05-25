import mongoose from 'mongoose';

const { Schema } = mongoose;

const questionSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  product_id: { type: Number, required: true },
  body: { type: String, required: true },
  date: { type: Date, required: true },
  asker_name: { type: String, required: true },
  asker_email: String,
  helpfulness: Number,
  reported: Boolean,
  answers: [{
    id: { type: Number, required: true, unique: true },
    body: { type: String, required: true },
    date: { type: Date, required: true },
    answerer_name: { type: String, required: true },
    answerer_email: String,
    helpfulness: Number,
    photos: [{
      id: { type: Number, required: true, unique: true },
      url: { type: String, required: true },
    }],
  }],
});

const Question = mongoose.model('Question', questionSchema);
