import { Router } from 'express';
import userRouter from './users';
import raceRouter from './races';

let router = Router()
router.use('/users', userRouter)
router.use('/races', raceRouter)
export default router
