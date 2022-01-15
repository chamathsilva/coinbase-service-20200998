import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import HttpStatus from "http-status-codes";
import compression from "compression";
import morgan from "morgan";

import router from "./routes/index";
import { createSuccessResponse } from "./util/responseGenerator";
import errorHandler from "./middleware/errorHandler";
import NotFoundException from "./exceptions/NotFoundException";
import initializer from "./initializer";


initializeConfigs().then(() => {
  const app = express();

  const port = 8080;
  // standard middleware
  app.use(cors());
  app.use(compression());
  app.use(bodyParser.text({ inflate: true }));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get('/', (req, res) => { res.status(HttpStatus.OK).send('Coinbase Service is working!!!!'); });

  // app.use(
  //   morgan(":method :url :status :res[content-length] - :response-time ms")
  // );

  app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));


  // Health check API
  app.get("/coinbase-service/health-check", (req, res) => {
    const health = {
      uptime: process.uptime(),
      memoryUsage: process.memoryUsage(),
      nodeVersion: process.versions.node,
      nodeEnv: process.env.NODE_ENV,
      deploymentEnv: process.env.STAGE,
      versionId: process.env.VERSION_ID,
      version: 'blue-11',
      envs: process.env
    };
    res.status(HttpStatus.OK).send(createSuccessResponse(health));
  });

  // Set Express router with API version prefix
  app.use('/coinbase-service/', router);

  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new NotFoundException();
    next(err);
  });

  // error handler
  app.use(errorHandler());

  app.listen(port, () => {
    console.log(`Coinbase crypto exchange app listening at port: ${port}`);
  });

  // export express app for supertest (unit test & integration test) framework use.
  exports.app = app;
});


async function initializeConfigs() {
  try {
    await initializer()
    return "done";
  } catch (e) {
    console.log(e);
  }
}
