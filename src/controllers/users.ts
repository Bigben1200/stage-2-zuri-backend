import { Request, Response, NextFunction } from "express";
import { v4 as uuidv4 } from "uuid";
import { Person, IPerson } from "../models/personModel";

export const createPerson = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name } = req.body;

    const personId = uuidv4();

    // Check if a person with the same name already exists
    const findPerson = await Person.findOne({ name });

    if (findPerson) {
      return res.status(200).json({ message: `Person already exists` });
    }

    // Create a new person with the generated UUID
    const newPerson = new Person({
      _id: personId, // Use the generated UUID as the ID
      name,
    });

    const person: IPerson = await newPerson.save();
    if (person) {
      return res.status(200).json({
        message: `Person created successfully!`,
        person,
      });
    }

    return res.status(401).json({
      message: `Unable to create Person!!!!`,
    });
  } catch (error) {
    console.log(error);
  }
};

// Get Person by ID

export const getPersonById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const personId = req.params.id;

    // Use Person.findById to retrieve a person by their ID
    const person: IPerson | null = await Person.findById(personId);
    console.log("personId", personId);

    if (!person) {
      return res
        .status(404)
        .json({ message: `Person with ID ${personId} not found` });
    }

    return res.status(200).json({ person });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

//Update a Person
export const updatePersonById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const personId = req.params.id;
    const { name } = req.body;

    const updatedPerson: IPerson | null = await Person.findByIdAndUpdate(
      personId,
      { name },
      { new: true }
    );

    if (!updatedPerson) {
      return res
        .status(404)
        .json({ message: `Person with ID ${personId} not found` });
    }

    return res.status(200).json({ updatedPerson });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

//Delete a person
export const deletePersonById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const personId = req.params.id;

    const deletedPerson: IPerson | null = await Person.findByIdAndRemove(
      personId
    );

    if (!deletedPerson) {
      return res
        .status(404)
        .json({ message: `Person with ID ${personId} not found` });
    }

    return res.status(200).json({ message: "Person deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
