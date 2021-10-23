import { connect } from 'mongoose';
import { expect } from 'chai';
import { UserModel, RaceModel, AthleteModel } from './models';
import server from './server';
import request from 'supertest';
import faker from 'faker';
import dotenv from 'dotenv';


const agent = request(server)
let appServer
describe('User Management', () => {
  before(done => {
    dotenv.load()
    console.log('process.env.MONGO_API_URL', process.env.MONGO_API_URL)
    connect(process.env.MONGO_API_URL, {useNewUrlParser: true, serverSelectionTimeoutMS: 5000, useUnifiedTopology:true}).then(() => {
      console.log('yooo')
      console.log('database initialized')
      appServer  = server.listen(3001, () => {
        console.log('listening on 3000')
        done()
      })
    })
    .catch(console.log)
    
  })
  after(done => {
    Promise.all([UserModel.remove(), RaceModel.remove(), AthleteModel.remove()]).then(() => {
      appServer.close()
      done()
    })
  })
  
  it('should create a user', done => {
    const user = {
      createdAt: Date.now(),
      updatedAt: Date.now(),
      phone: 'test',
      password: '',
      downloadAppDate: Date.now(),
      followersCount: 0,
      followingCount: 0,
      role: 0,
      userType: 0,
      userName: 'jkol36',
      firstName: 'jonathan',
      lastName: 'Kolman',
      unit: 'test',
      ageJoin: 26,
      requiredPasswordUpdate: false,
      following: false,
      followers: [],
      followings: [],
      racesIds: [],
      division: 'test',
      email: 'jonathankolman@gmail.com',
      devices: [],
      emailVerified: false,
    }
    agent.post('/users').send({user}).then(res => {
      console.log('created user', res.body)
      expect(res).to.be.ok
      expect(res.status).to.eq(200)
      done()
    })
  })
  it('should create a race', done => {
    const race = {
       createdAt: Date.now(),
       updatedAt: Date.now(),
       eventId: 1,
       name: faker.lorem.word(),
       shortName: faker.lorem.word(),
       description: faker.lorem.sentence(),
       cacheKey: 'yoo',
       distance: faker.datatype.number(),
       minAge: faker.datatype.number(),
       maxAge: faker.datatype.number(),
       timerId: faker.datatype.number(),
       plannedStartAt: Date.now(),
       startAt: Date.now(),
       endAt: Date.now(),
       timeLimit: faker.datatype.number(),
       scoreSetup: 'yoo',
       lastTriggeredAt: Date.now(),
       timerType: 'yoo',
       timerAthleteUrl: 'http://google.com',
       timerTimingUrl: 'http://google.com',
       atheleteCount: 10,
       matched: 10,
       gunStart: true,
       gunStartAt: Date.now(),
       startedFlag: true,
       trackumResult: true,
       updateLeaderboard: true,
       Round: 'hey',
       staticMapUrl: 'hey',
    }
    agent.post('/races').send({race}).then(res => {
      console.log(res.body)
      expect(res).to.be.ok
      expect(res.status).to.eq(200)
      done()
      
    })
  })
  it('should bulk create users', done => {
      let users = []
      for(let i=0; i< 1000; i++) {
        users.push({
          createdAt: Date.now(),
          updatedAt: Date.now(),
          phone: 'test',
          password: '',
          downloadAppDate: Date.now(),
          followersCount: 0,
          followingCount: 0,
          role: 0,
          userType: 0,
          userName: faker.internet.userName(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          unit: faker.lorem.word(),
          ageJoin: faker.datatype.number(),
          requiredPasswordUpdate: false,
          following: false,
          followers: [],
          followings: [],
          division: 'test',
          email: faker.internet.email(),
          devices: [],
          races: [1,2,3,4],
          emailVerified: faker.datatype.boolean(),
        })
      }
      agent.post('/users/bulk')
      .send({users})
      .then(res => {
        console.log('users bulk', res.body)
        expect(res).to.be.ok
        expect(res.status).to.eq(200)
        done()
      })
  })
  it('shoulld get all users', done => {
   agent.get('/users').then(res => {
    expect(res.status).to.eq(200)
    expect(res.body).to.be.an.array
    done()
   })
  })
  it('should get all races', done => {
    agent.get('/races').then(res => {
      expect(res.status).to.eq(200)
      expect(res.body).to.be.an.array
      console.log(res.body)
      done()
    })
  })
  it.only('should create an athlete', done => {
    let athlete = {
      phone: faker.phone.phoneNumber,
      firstName: faker.name.findName(),
      lastName: faker.name.findName(),
      weight: faker.datatype.number(),
      races: [],
    }

    agent
    .post('/athletes')
    .send({athlete})
    .then(res => {
      expect(res.status).to.eq(200)
      done()
    })
  })
  it.only('should bulk create athletes', done => {
    let athletes = []
    for(var i = 0; i< 1000; i++) {
      athletes.push({
        phone: faker.phone.phoneNumber,
        firstName: faker.name.findName(),
        lastName: faker.name.findName(),
        weight: faker.datatype.number(),
        races: []
      })
    }
    agent
    .post('/athletes/bulk')
    .send({athletes})
    .then(res => {
      expect(res).to.be.ok
      done()
    })
  })

  it.only('should get athletes', done => {
    agent
    .get('/athletes')
    .then(res => {
      console.log(res.body.athletes)
      done()
      // do something with the response
    })
  })

  
})