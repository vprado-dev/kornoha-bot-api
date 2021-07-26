import { Router } from 'express';
import { catGetOne } from '../endpoint/cat';
import { auth } from '../middlewares/auth';

const router = Router();

/**
 * GET /cat
 * @tag Cat
 * @security bearerAuth
 * @response 204
 * @responseContent {cat} 204.application/json
 * @response default
 * @responseContent {Error} default.application/json
 */

router.get('/cat', auth, catGetOne);

export default router;
