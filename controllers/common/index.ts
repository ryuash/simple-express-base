import { Request, Response, NextFunction} from 'express';

const commonRouter = {
  v1: {
    example(_req: Request, res: Response, next: NextFunction) {
      try {
        return res.json({
          message: 'hello world'
        }).status(200)
      } catch (err) {
        next(err)
      }
    }
  }
}

export default commonRouter;
