import { Router } from 'express';
import userRouter from './users';
import raceRouter from './races';
import athleteRouter from './athletes';

let router = Router()
router.use('/users', userRouter)
router.use('/races', raceRouter)
router.use('/athletes', athleteRouter)
export default router
