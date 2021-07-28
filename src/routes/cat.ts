import { Router } from 'express';
import { catGetOne } from '../endpoint/cat';
import { auth } from '../middlewares/auth';

const router = Router();

/**
 * GET /cat
 * @tag Cat
 * @security bearerAuth
 * @response 200
 * @responseContent {catResponseBody} 200.application/json
 * @responseContent {Error} default.application/json
 */

router.get('/cat', auth, catGetOne);

export default router;
