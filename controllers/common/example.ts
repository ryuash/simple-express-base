import { Request, Response, NextFunction} from 'express';

export const example = (_req: Request, res: Response, next: NextFunction) => {
  try {
    return res.status(200).json({
      message: 'hello world'
    })
  } catch (err) {
    next(err)
  }
}
