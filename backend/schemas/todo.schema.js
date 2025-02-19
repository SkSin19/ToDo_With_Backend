import mongoose from "mongoose";
import { User } from "./user.schema.js";

const todoSchema = new mongoose.Schema(
    {
        task: {
            type: String,
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            require: true
        }
    },
    { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);
