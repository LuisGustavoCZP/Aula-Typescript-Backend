import { Request, Response } from "express";
import { v4 as uuid } from "uuid";

export function login (req : Request, res : Response)
{
    const userData = req.body;
    console.log("UserData", userData);
    res.status(200).json({
        data: {
            id: uuid(),
        },
        message: []
    })
}