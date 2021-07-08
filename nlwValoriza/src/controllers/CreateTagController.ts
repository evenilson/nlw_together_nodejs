import { Request, Response } from "express";
import { CreateTagService } from "../services/CreateTagService";

class CreateTagController {

  async handle(req: Request, res: Response) {
    const { name }  = req.body;

    const createUserService = new CreateTagService();

    const tag = await createUserService.execute(name);

    return res.json(tag);
  }
}

export { CreateTagController };