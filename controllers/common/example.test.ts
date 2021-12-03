import { Request, Response, NextFunction} from 'express';
import { generateMockResponse, generateMockNext } from '../../tests/express_mock';
import { example } from './example';

describe("Example", function() {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;

  beforeEach(() => {
    req = {};
    res = generateMockResponse();
    next = generateMockNext();
});

  it("should respond", function() {
    example(req as Request, res as Response, next);

    expect(res.json).toBeCalledWith({
      message: 'hello world'
    });
    expect(res.status).toBeCalledWith(200);
    expect(next).toBeCalledTimes(0);
  });

});
