import { Router } from 'express';
import { twitchLiveStatusGet } from '../endpoint/twitch';

const router = Router();

/**
 * GET /twitchLiveStatus
 * @tag twitchLiveStatus
 * @response 204
 * @responseContent {twitchLiveStatus} 204.application/json
 * @response default
 * @responseContent {Error} default.application/json
 */

router.get('/twitchLiveStatus', twitchLiveStatusGet);

export default router;
