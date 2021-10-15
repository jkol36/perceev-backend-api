import { Schema, model } from 'mongoose';

const schema = new Schema({
 createdAt: Date,
 updatedAt: Date,
 eventId: Number,
 name: String,
 shortName: String,
 description: String,
 cacheKey: String,
 distance: Number,
 minAge: Number,
 maxAge: Number,
 timerId: Number,
 plannedStartAt: Date,
 startAt: Date,
 endAt: Date,
 timeLimit: Number,
 scoreSetup: String,
 lastTriggeredAt: Date,
 timerType: String,
 timerAthleteUrl: String,
 timerTimingUrl: String,
 atheleteCount: Number,
 matched: Number,
 gunStart: Boolean,
 gunStartAt: String,
 startedFlag: Boolean,
 trackumResult: Boolean,
 updateLeaderboard: Boolean,
 Round: String,
 staticMapUrl: String,
 
});

export const RaceModel = model('Race', schema);