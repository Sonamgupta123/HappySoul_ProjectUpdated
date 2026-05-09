<<<<<<< HEAD

import express from 'express';

const router = express.Router();

//to link controller
import * as contactController from '../controller/contact.controller.js';
router.post("/send",contactController.save);
 router.get("/fetch",contactController.fetch);

=======

import express from 'express';

const router = express.Router();

//to link controller
import * as contactController from '../controller/contact.controller.js';
router.post("/send",contactController.save);
 router.get("/fetch",contactController.fetch);

>>>>>>> dddd640725d6965bfe90ae355c0707a5a58cdc01
export default router;