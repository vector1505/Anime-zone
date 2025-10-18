import express from 'express';
import type { Request, Response } from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
        console.log("Works");
})

app.use(express.json());

app.get('/',async(req: Request, res: Response) =>{
    const name: String = req.body.name;
    res.send({"name": name});
});




