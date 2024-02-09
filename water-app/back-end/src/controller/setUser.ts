import express from 'express';
import { Request, Response } from 'express';
import { md5 } from 'js-md5';

const router = express.Router();

router.post('/set-user', (req: Request, res: Response) => {
    const user = req.body && req.body.user;
    const password = req.body && req.body.password;
    const hashedPassword = md5(password);

    if (password) {
        if (password.length < 8) {
            res.status(400).json({ error: 'A senha deve ter pelo menos 8 caracteres.' });
            return;
        }
    }
  
    if (user && password) {
      res.json({ user, hashedPassword });
    } else {
      res.status(400).json({ error: 'Dados inválidos. Certifique-se de incluir user e password no corpo da solicitação.' });
    }
  });


export default router;