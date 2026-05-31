import { registerUserService, loginUserService, getUserCreditsService } from '../services/userService.js';
import { sendResponse } from '../utils/responseHandler.js';
import asyncHandler from '../utils/asyncHandler.js';

export const registerUser = asyncHandler(async (req, res) => {
  const result = await registerUserService(req.body);
  sendResponse(res, 201, 'User registered successfully', result);
});

export const loginUser = asyncHandler(async (req, res) => {
  const result = await loginUserService(req.body);
  sendResponse(res, 200, 'Login successful', result);
});

export const userCredits = asyncHandler(async (req, res) => {
  const result = await getUserCreditsService(req.user._id);
  sendResponse(res, 200, 'Credits retrieved successfully', result);
});