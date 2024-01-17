const router = require('express').Router();
import { Request, Response, NextFunction } from 'express';

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  res.send({ message: 'Ok api is working 🚀' });
});

module.exports = router;
