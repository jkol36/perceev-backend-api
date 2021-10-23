import { Schema, model, Types } from 'mongoose';

const schema = new Schema({
  phone: String,
  firstName: String,
  lastName: String,
  weight: Number,
  races: Array,
});

export const AthleteModel = model('Athlete', schema);