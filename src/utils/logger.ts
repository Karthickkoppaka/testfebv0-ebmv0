import pino from "pino";

export const logger = pino({
  redact: ["DATABASE_CONNNECTION"],
  level: "debug",
  transport: {
    target: "pino-pretty",
  },
});
