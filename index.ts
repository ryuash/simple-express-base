import express, { Request, Response, NextFunction } from 'express';
import { v1 } from './routers';

const app = express();
const PORT = process.env.PORT || 8080;

// middlewares
app.use(express.json());


app.use('/api/v1/', v1);

// 404 middleware
app.use((_req, _res, next) => {
  const error = new Error('Not found') as ResponseError;
  error.status = 404;
  next(error);
});

// error handler middleware
app.use((error: ResponseError, _req: Request, res: Response, _next: NextFunction) => {
  res.status(error.status || 500).send({
    error: {
      status: error.status || 500,
      message: error.message || 'Internal Server Error',
    },
  });
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, (err?: any) => {
    if (err) throw err;
    console.log(`> Ready at http://localhost:${PORT}`);
    console.log(`> ENV:  ${process.env.NODE_ENV}`);
    console.log(`> PORT:  ${PORT}`);
  });
}


export default app;
