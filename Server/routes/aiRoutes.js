import express from 'express';
import { generateImage, generateText, generateBlog } from '../controllers/aiController.js';
import userAuth from '../middlewares/auth.js';
import { validate } from '../middlewares/validate.js';
import { generateImageSchema, generateTextSchema } from '../validators/aiValidator.js';

const aiRouter = express.Router();

aiRouter.post('/generate-image', userAuth, validate(generateImageSchema), generateImage);
aiRouter.post('/generate-text', userAuth, validate(generateTextSchema), generateText);
aiRouter.post('/generate-blog', userAuth, validate(generateTextSchema), generateBlog);

export default aiRouter;
