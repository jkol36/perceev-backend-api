import mongoose from 'mongoose';
import { Router } from 'express';
import { AthleteModel } from '../models';

const router = Router()

router.route('/')
.post((req, res) => {
    const { athlete } = req.body
    AthleteModel.create(athlete).then(athlete => {
        res.json({status: 200, body: athlete})
    })
    .catch(err => {
      res.json({status: 500, body: err})
    })
})
.get((req, res) => {
  AthleteModel.find({}).then(athletes => {
    res.json({status: 200, body: athletes})
  })
  .catch(err => {
    console.log(err)
    res.json({status: 500, body: err})
  })
})

router.route('/bulk')
.post((req, res) => {
    const {athletes} = req.body
    console.log('creating', athletes.length)
    AthleteModel.collection.insertMany(athletes).then(athletes => {
      console.log('athletes', athletes)
      res.json({status: 200})
    })
})

export default router