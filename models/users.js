import { Schema, model, Document } from 'mongoose';



const schema = new Schema({
 createdAt: Date,
 updatedAt: Date,
 birthdate: Date,
 country: String,
 phone: String,
 password: String,
 downloadAppDate: Date,
 followersCount: Number,
 followingCount: Number,
 role: Number, 
 userType: Number,
 userName: String,
 firstName: String,
 lastName: String,
 unit: String,
 ageJoin: Number,
 requiredPasswordUpdate: Boolean,
 following: Boolean,
 followers: Array,
 followings: Array,
 division: String,
 raceIds: Array,
 email: String,
 avatar: String,
 devices: Array,
 emailVerified: Boolean,
 emailVerifiedAt: Date
});

export const UserModel = model('User', schema);