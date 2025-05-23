import express from 'express';
import { getMe, login, logout, signup } from '../contoller/auth.js';
import protectRoute from "./Route/protectRoute.js";


const router = express.Router();

router.post('/signup',signup);
router.post('/login',login);
router.post('/logout',logout);
router.get('/getme',protectRoute,getMe);

export default router;