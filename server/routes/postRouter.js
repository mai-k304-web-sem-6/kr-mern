import express from 'express';
import PostController from '../controllers/PostController.js';

const router = new express.Router();

router.get('/posts', PostController.getAll);
router.get('/post/:id', PostController.getOne);
router.post('/post', PostController.create);
router.delete('/post/:id', PostController.remove);
router.patch('/post/:id', PostController.update);

export default router;
