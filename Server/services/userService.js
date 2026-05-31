import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';
import AppError from '../utils/AppError.js';
import { ENV } from '../config/env.js';

export const registerUserService = async ({ name, email, password }) => {
  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    throw new AppError('Email already in use', 400);
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = await userModel.create({
    name,
    email,
    password: hashedPassword,
  });

  const token = jwt.sign({ id: newUser._id }, ENV.JWT_SECRET, {
    expiresIn: '7d',
  });

  return { token, user: { name: newUser.name, email: newUser.email, creditBalance: newUser.creditBalance } };
};

export const loginUserService = async ({ email, password }) => {
  const user = await userModel.findOne({ email });
  if (!user) {
    throw new AppError('Invalid email or password', 401);
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new AppError('Invalid email or password', 401);
  }

  const token = jwt.sign({ id: user._id }, ENV.JWT_SECRET, {
    expiresIn: '7d',
  });

  return { token, user: { name: user.name, email: user.email, creditBalance: user.creditBalance } };
};

export const getUserCreditsService = async (userId) => {
  const user = await userModel.findById(userId);
  if (!user) {
    throw new AppError('User not found', 404);
  }
  return { name: user.name, creditBalance: user.creditBalance };
};

export const deductCreditService = async (userId, amount = 1) => {
  const user = await userModel.findById(userId);
  if (!user) {
    throw new AppError('User not found', 404);
  }
  
  if (user.creditBalance < amount) {
    throw new AppError('Insufficient credits', 402); // 402 Payment Required / Insufficient Funds
  }

  user.creditBalance -= amount;
  await user.save();
  return user.creditBalance;
};
