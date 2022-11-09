import { Request, Response } from "express";
import { v4 as uuid } from "uuid";

export function create (req : Request, res : Response)
{
    const userData = req.body;
    console.log("UserData", userData);
    res.status(201).json({
        data: {
            email: req.body["email"],
            name: req.body["name"],
            id: uuid(),
        },
        message: []
    })
}