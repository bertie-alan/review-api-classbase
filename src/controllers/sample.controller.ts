import { Request, Response } from "express";

export class SampleController {
    async getSample(req: Request, res: Response) {
        return res.status(200).send("Sample Get Controller")
    }

    async createSample(req: Request, res: Response) {
        return res.status(200).send("Sample Create Controller")
    }

    async addNewImage(req: Request, res: Response) {
        try {
            console.log(req.file);

            return res.status(200).send(`file ${req.file?.filename} successfully uploaded`)
        } catch (error: any) {
            console.log(error);
            return res.status(500).send(error);
        }
    }

    async addMultipleImage(req: Request, res: Response) {
        try {
            console.log(req.files);

            return res.status(200).send("Upload multiple files success")
        } catch (error: any) {
            console.log(error);
            return res.status(500).send(error);
        }
    }
}