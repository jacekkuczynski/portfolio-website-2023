import express from "express";
import rateLimit from "express-rate-limit";
import payload from "payload";
import morgan from "morgan";

require("dotenv").config();
const app = express();

export const email = {
  fromName: "Admin",
  fromAddress: process.env.EMAIL_SENDER,
  transportOptions: {
    host: process.env.SMTP_HOST,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    port: 465,
    secure: true,
  },
};

app.get("/", (_, res) => {
  res.redirect("/admin");
});

const start = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    email,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  const PORT = process.env.PORT || 3000;

  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 100, // Limit each IP to 100 requests per 15 minutes
    standardHeaders: "draft-7",
    legacyHeaders: false,
  });

  app.use(limiter);

  app.use(morgan("tiny"));
  app.set("trust proxy", 1);

  app.listen(PORT);
};

start();
