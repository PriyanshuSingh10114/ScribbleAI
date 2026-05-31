import aiProvider from '../services/ai/aiProvider.js';
import { deductCreditService } from '../services/userService.js';
import { sendResponse } from '../utils/responseHandler.js';
import asyncHandler from '../utils/asyncHandler.js';

export const generateImage = asyncHandler(async (req, res) => {
  const { prompt } = req.body;
  const userId = req.user._id;

  // Attempt to generate image first
  const resultImage = await aiProvider.generateImage(prompt);

  // If successful, deduct credit
  const newBalance = await deductCreditService(userId, 1);

  sendResponse(res, 200, 'Image Generated Successfully', {
    resultImage,
    creditBalance: newBalance,
  });
});

export const generateText = asyncHandler(async (req, res) => {
  const { prompt } = req.body;
  const userId = req.user._id;

  const resultText = await aiProvider.generateText(prompt);
  const newBalance = await deductCreditService(userId, 1);

  sendResponse(res, 200, 'Text Generated Successfully', {
    resultText,
    creditBalance: newBalance,
  });
});

export const generateBlog = asyncHandler(async (req, res) => {
    const { topic } = req.body;
    const userId = req.user._id;
  
    const resultText = await aiProvider.generateBlog(topic);
    const newBalance = await deductCreditService(userId, 2); // Blog costs 2 credits
  
    sendResponse(res, 200, 'Blog Generated Successfully', {
      resultText,
      creditBalance: newBalance,
    });
});
