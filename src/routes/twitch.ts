import { Router } from 'express';
import { twitchAccountLinkPost } from '../endpoint/twitch';
import { auth } from '../middlewares/auth';

const router = Router();

/**
 * POST /twitchAccountLink
 * @security bearerAuth
 * @tag twitchAccountLink
 * @responseContent {twitchAccountLink} 200.application/json
 * @response default
 * @responseContent {Error} default.application/json
 */

router.post('/twitchAccountLink', auth, twitchAccountLinkPost);

export default router;
