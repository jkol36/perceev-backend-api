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
})
.get((req, res) => {
  AthleteModel.find({}).then(athletes => {
    res.json({status: 200, body: athletes})
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