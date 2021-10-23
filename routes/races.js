import { Router } from 'express';
import { RaceModel } from '../models';

const router = Router()

router.route('/')
.post((req, res) => {
    const { race } = req.body
    RaceModel.create(race).then(race => {
        res.json({status: 200, body: race})
    })
})
.get((req, res) => {
  RaceModel.find({}).then(races => {
    res.json({status: 200, body: races})
  })
})

router.route('/bulk')
.post((req, res) => {
    const {races} = req.body
    console.log('creating', races.length)
    RaceModel.collection.insertMany(races).then(races => {
      console.log('races', races)
      res.json({status: 200})
    })
})

export default router