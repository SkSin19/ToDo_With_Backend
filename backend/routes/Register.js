import { Router } from "express";
import { User } from "../schemas/user.schema.js";

const registerPageRouter = Router();



registerPageRouter.post("/api/register", async (req, res) => {
    const {name, email, password} = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send("The user already exists, Login");
        }

        const registerUser = new User({
            name,
            email,
            password
        });
        await registerUser.save();
        res.status(201).send(registerUser);
       
    } catch (error) {
        res.status(400).send(error.message);
    }
});




export default registerPageRouter;