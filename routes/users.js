import { Router } from 'express';
import { UserModel } from '../models';

const router = Router()

router.route('/')
.post((req, res) => {
    const { user } = req.body
    console.log('creating', user)
    UserModel.create(user).then(user => {
        res.json({status: 200, body: user})
    })
})

router.route('/bulk')
.post((req, res) => {
    const {users} = req.body
    console.log('creating', users.length)
    UserModel.collection.insertMany(users).then(users => {
      console.log('users', users)
      res.json({status: 200})
    })
})

export default router