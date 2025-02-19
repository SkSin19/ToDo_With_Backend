import { Router } from "express";
import Users from "../data/UserData.js";
import { Todo } from "../schemas/todo.schema.js";
import { User } from "../schemas/user.schema.js";

const mainPageRouter = Router();


mainPageRouter.get("/api/main", async (req, res) => {
    try {
        
    } catch (error) {
        
    }
});



// mainPageRouter.post("/api/todo", async (req, res) => {
//     const { task } = req.body;
//     try {
//         const todo = new Todo({
//             task
//         });
//         await todo.save();
//         res.status(201).send(todo);
//     } catch (error) {
//         res.status(400).send(error);
//     }
// });


mainPageRouter.post("/api/todo", async (req, res) => {
    const { task } = req.body;
    const userId = req.cookies.userId; // ✅ Get user ID from cookies

    if (!userId) {
        return res.status(401).send("Unauthorized: User not logged in");
    }

    try {
        const todo = new Todo({ task, user: userId }); // ✅ Save task with user ID
        await todo.save();
        res.status(201).send(todo);
    } catch (error) {
        res.status(500).send(error);
    }
});


// mainPageRouter.get("/api/todo", async (req, res) => {
//     try {
//         const tasks = await Todo.find()
//         res.status(200).json(tasks);
//     } catch (error) {
//         res.status(400).send(error);
//     }
// });

mainPageRouter.get("/api/todo", async (req, res) => {
    const userId = req.cookies.userId; // ✅ Get user ID from cookies

    if (!userId) {
        return res.status(401).send("Unauthorized: User not logged in");
    }

    try {
        const todos = await Todo.find({ user: userId }); // ✅ Fetch tasks for the logged-in user
        res.send(todos);
    } catch (error) {
        res.status(500).send(error);
    }
});


mainPageRouter.delete('/api/todo/:id', async (req, res) => {
    try {
        const deleteTask = await Todo.findByIdAndDelete(req.params.id);
        if (!deleteTask) {
            return res.status(404).send("Task not found");
        }
        res.send(deleteTask);
    } catch (error) {
        res.status(500).send(error);
    }
});





export default mainPageRouter;