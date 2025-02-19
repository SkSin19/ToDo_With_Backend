import { Router } from "express";
import cookieParser from "cookie-parser";
import { User } from "../schemas/user.schema.js";

const loginRouter = Router();

loginRouter.use(cookieParser()); 

// loginRouter.get('/api/login', async (req, res) => {
//     const { email, password } = req.query; // Extract email and password from query params

//     const userFound = await User.findOne({ email, password });

//     if (userFound) {
//         res.cookie('email', userFound.email, { 
//             httpOnly: true,
//             secure: process.env.NODE_ENV === "production",
//             maxAge: 24 * 60 * 60 * 1000 
//         });
        
//         res.status(200).send(true);
//     } else {
//         res.status(401).send(false);
//     }
// });

loginRouter.get('/api/login', async (req, res) => {
    const user = await User.findOne({ email: req.query.email, password: req.query.password });

    if (user) {
        res.cookie('userId', user._id, { httpOnly: true }); // ✅ Store user ID in cookies
        res.status(200).send(true);
    } else {
        res.status(401).send(false);
    }
});

export default loginRouter;
