import { Router } from "express";
import {
  login,
  register,
  logout,
  profile,
  verifyToken,
  setAdmin
} from "../controllers/auth.controllers.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post("/register", validateSchema(registerSchema), register);

router.post("/login",validateSchema(loginSchema), login);

router.post("/logout", logout);

router.get("/profile", authRequired, profile);

router.patch("/setadmin", authRequired, setAdmin);

router.get('/auth/verify-token', verifyToken)

//las rutas van a la config de express
export default router;
