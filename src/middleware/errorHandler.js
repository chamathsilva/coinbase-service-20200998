import HttpStatus from 'http-status-codes';
import ApiException from '../exceptions/ApiException';
import { createErrorResponse } from '../util/responseGenerator';

export default function errorHandler() {
  return (err, req, res, next) => {
    console.log("err ", err);
    if (err instanceof ApiException) {
      const statusCode = err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR;
      return res.status(statusCode).send(createErrorResponse(err));
    }
    if (err instanceof Error) {
      const errorInformation = {};
      errorInformation.error = err.toString();
      if (err.stack !== undefined) errorInformation.stack = err.stack;
      if (err.code !== undefined) errorInformation.code = err.code;
      if (err.path !== undefined) errorInformation.path = err.path;
      if (err.causes !== undefined) errorInformation.causes = err.causes;

      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(createErrorResponse(err, 'Internal server error'));
    }
    return next(err);
  };
}
