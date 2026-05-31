import aiProvider from '../services/ai/aiProvider.js';
import { deductCreditService } from '../services/userService.js';
import { sendResponse } from '../utils/responseHandler.js';
import asyncHandler from '../utils/asyncHandler.js';
import imageModel from '../models/imageModel.js';
import avatarModel from '../models/avatarModel.js';
import logoModel from '../models/logoModel.js';

export const generateAvatar = asyncHandler(async (req, res) => {
    const { baseImageUrl, style } = req.body;
    const userId = req.user._id;

    // Call AI Provider to generate avatar based on style and base image
    // For now, placeholder AI interaction
    const resultImage = `data:image/png;base64,placeholder_avatar_${style}`;

    const newAvatar = await avatarModel.create({
        userId,
        url: resultImage,
        style,
        baseImageUrl
    });

    const newBalance = await deductCreditService(userId, 2);

    sendResponse(res, 201, 'Avatar Generated Successfully', {
        avatar: newAvatar,
        creditBalance: newBalance,
    });
});

export const generateLogo = asyncHandler(async (req, res) => {
    const { companyName, industry, style } = req.body;
    const userId = req.user._id;

    const prompt = `A minimalist professional logo for a company named ${companyName} in the ${industry} industry. Style: ${style}. Clean background.`;
    const resultImage = await aiProvider.generateImage(prompt);

    const newLogo = await logoModel.create({
        userId,
        url: resultImage,
        companyName,
        industry,
        style
    });

    const newBalance = await deductCreditService(userId, 2);

    sendResponse(res, 201, 'Logo Generated Successfully', {
        logo: newLogo,
        creditBalance: newBalance,
    });
});

export const editImage = asyncHandler(async (req, res) => {
    const { imageUrl, action } = req.body;
    const userId = req.user._id;

    // action can be 'removeBackground', 'upscale', 'enhance'
    // Call AI provider
    const resultImage = `data:image/png;base64,placeholder_edited_${action}`;

    const newBalance = await deductCreditService(userId, 1);

    sendResponse(res, 200, 'Image Edited Successfully', {
        resultImage,
        creditBalance: newBalance,
    });
});
