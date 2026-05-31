import express from 'express';
import { registerUser, loginUser, userCredits } from '../controllers/userController.js';
import userAuth from '../middlewares/auth.js';
import { validate } from '../middlewares/validate.js';
import { registerSchema, loginSchema } from '../validators/userValidator.js';
import { apiLimiter } from '../middlewares/security.js';

const userRouter = express.Router();

userRouter.post('/register', apiLimiter, validate(registerSchema), registerUser);
userRouter.post('/login', apiLimiter, validate(loginSchema), loginUser);
userRouter.get('/credits', userAuth, userCredits);

export default userRouter;
