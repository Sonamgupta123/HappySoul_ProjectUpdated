
require("dotenv").config();

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import './model/connection.js';

const app = express();

// Routers
import userRouter from './router/user.router.js';
import contactRouter from './router/contact.router.js';
import moodRouter from './router/mood.router.js';

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS
app.use(cors());

// Routes
app.use("/user", userRouter);
app.use("/contact", contactRouter);
app.use("/mood", moodRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server invoked at port ${PORT}`);
});

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

// Routers
import userRouter from './router/user.router.js';
import contactRouter from './router/contact.router.js';
import moodRouter from './router/mood.router.js';

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: "true" }));

// CORS
app.use(cors());

// Application Level Middleware
app.use("/user", userRouter);
app.use("/contact", contactRouter);
app.use("/mood", moodRouter);   // ✅ Required for mood data

app.listen(3001);
console.log("Server invoked at http://localhost:3001");

