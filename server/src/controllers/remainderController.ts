import { Request, Response } from "express";
import userModel from "../models/userModel";

export const getRemainder = async (req: Request, res: Response) => {
  try {
    const remainders = await userModel.find();
    console.log(remainders);
    res.status(200).json({ remainders });
  } catch (error) {
    console.log(error);
    res.status(500).json({ messsage: error.messsage });
  }
};

export const createRemainder = async (req: Request, res: Response) => {
  try {
    const remainders = await userModel.find();
    console.log(remainders);
    res.status(200).json({ remainders });
  } catch (error) {
    console.log(error);
    res.status(500).json({ messsage: error.messsage });
  }
};

export const updateRemainder = async (req: Request, res: Response) => {
  try {
    const remainders = await userModel.find();
    console.log(remainders);
    res.status(200).json({ remainders });
  } catch (error) {
    console.log(error);
    res.status(500).json({ messsage: error.messsage });
  }
};

export const deleteRemainder = async (req: Request, res: Response) => {
  try {
    const remainders = await userModel.find();
    console.log(remainders);
    res.status(200).json({ remainders });
  } catch (error) {
    console.log(error);
    res.status(500).json({ messsage: error.messsage });
  }
};
