import express from 'express';
import { Request, Response } from 'express';

const router = express.Router();

router.get('/user-controller', (req: Request, res: Response) => {
  const user = {
    name: 'teste',
    id: 1
  }
  res.json(user);
})

export default router;