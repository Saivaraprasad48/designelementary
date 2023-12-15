import { Request, Response } from "express";
import remainderModel from "../models/remainderModel";

export const getRemainder = async (req: Request, res: Response) => {
  try {
    const remainders = await remainderModel.find({});
    console.log(remainders);
    res.status(200).json({ remainders });
  } catch (error) {
    console.log(error);
    res.status(500).json({ messsage: error.messsage });
  }
};

export const createRemainder = async (req: Request, res: Response) => {
  try {
    const newRemainder = remainderModel.create({});
    res
      .status(201)
      .json({ message: "new remainder created", data: newRemainder });
  } catch (error) {
    console.log(error);
    res.status(500).json({ messsage: error.messsage });
  }
};

export const updateRemainder = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const updatedRemainder = await remainderModel.findByIdAndUpdate({});
    console.log(updatedRemainder);
    res.status(200).json({
      message: "Remainder updated sucessfully",
      data: updatedRemainder,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ messsage: error.messsage });
  }
};

export const deleteRemainder = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await remainderModel.findByIdAndDelete({ id });
    res.status(200).json({ message: "deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ messsage: error.messsage });
  }
};
