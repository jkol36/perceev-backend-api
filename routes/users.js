import { Router } from 'express';
import { UserModel } from '../models';

const router = Router()

router.route('/')
.post((req, res) => {
    const { user } = req.body
    UserModel.create(user).then(user => {
        res.json({status: 200, body: user})
    })
})
.get((req, res) => {
  UserModel
  .find({})
  .then(users => {
    res.json({status: 200, body: users})
  })
})

router.route('/bulk')
.post((req, res) => {
    const {users} = req.body
    UserModel.collection.insertMany(users).then(users => {
      res.json({status: 200, count: users.result.n})
    })
})

export default router