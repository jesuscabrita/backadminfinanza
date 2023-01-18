import fastify from "fastify";
import { app } from "./app";
import blipp from "fastify-blipp";




const server = fastify({
  disableRequestLogging: true,
  logger: {
    transport: {
      target: "pino-pretty",
      options: {
        translateTime: "HH:MM:ss Z",
        ignore: "pid,hostname",
      },
    },
  },
});

server.register(blipp);
server.register(app);

const PORT = process.env.PORT || 5000

server
  .listen(PORT)
  .then(() => {
    server.blipp();
  });