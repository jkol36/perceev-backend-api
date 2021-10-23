import server from './server';
import { connect } from 'mongoose';
import dotenv from 'dotenv'

dotenv.load()

connect(process.env.MONGO_API_URL, {useNewUrlParser: true, serverSelectionTimeoutMS: 5000, useUnifiedTopology:true}).then(() => {
	console.log('connected to database')
	server.listen(process.env.PORT, () => console.log(`Listening on ${process.env.PORT}`))
})





