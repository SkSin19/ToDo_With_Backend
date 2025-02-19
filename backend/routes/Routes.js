import { Router } from "express";
import loginRouter from "./Login.js";
import mainPageRouter from "./MainPage.js";
import registerPageRouter from "./Register.js";

const routes = Router();

routes.use(loginRouter);
routes.use(mainPageRouter);
routes.use(registerPageRouter)



export default routes;

