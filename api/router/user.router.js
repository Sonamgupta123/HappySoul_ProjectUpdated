<<<<<<< HEAD

import express from 'express';

const router = express.Router();

//to link controller
import * as userController from '../controller/user.controller.js';
router.post("/register",userController.save);
router.get("/fetch", userController.fetch);
 router.patch("/update",userController.update);
 router.delete("/delete",userController.deleteuser);
 router.post("/login",userController.login);
=======

import express from 'express';

const router = express.Router();

//to link controller
import * as userController from '../controller/user.controller.js';
router.post("/register",userController.save);
router.get("/fetch", userController.fetch);
 router.patch("/update",userController.update);
 router.delete("/delete",userController.deleteuser);
 router.post("/login",userController.login);
>>>>>>> dddd640725d6965bfe90ae355c0707a5a58cdc01
export default router;