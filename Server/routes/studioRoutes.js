import express from 'express';
import { generateAvatar, generateLogo, editImage } from '../controllers/studioController.js';
import userAuth from '../middlewares/auth.js';

const router = express.Router();

router.use(userAuth);

router.post('/avatar', generateAvatar);
router.post('/logo', generateLogo);
router.post('/edit', editImage);

export default router;
