"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePersonById = exports.updatePersonById = exports.getPersonById = exports.createPerson = void 0;
const uuid_1 = require("uuid");
const personModel_1 = require("../models/personModel");
const createPerson = async (req, res, next) => {
    try {
        const { name } = req.body;
        const personId = (0, uuid_1.v4)();
        // Check if a person with the same name already exists
        const findPerson = await personModel_1.Person.findOne({ name });
        if (findPerson) {
            return res.status(200).json({ message: `Person already exists` });
        }
        // Create a new person with the generated UUID
        const newPerson = new personModel_1.Person({
            _id: personId,
            name,
        });
        const person = await newPerson.save();
        if (person) {
            return res.status(200).json({
                message: `Person created successfully!`,
                person,
            });
        }
        return res.status(401).json({
            message: `Unable to create Person!!!!`,
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.createPerson = createPerson;
// Get Person by ID
const getPersonById = async (req, res, next) => {
    try {
        const personId = req.params.id;
        // Use Person.findById to retrieve a person by their ID
        const person = await personModel_1.Person.findById(personId);
        console.log("personId", personId);
        if (!person) {
            return res
                .status(404)
                .json({ message: `Person with ID ${personId} not found` });
        }
        return res.status(200).json({ person });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
exports.getPersonById = getPersonById;
//Update a Person
const updatePersonById = async (req, res, next) => {
    try {
        const personId = req.params.id;
        const { name } = req.body;
        const updatedPerson = await personModel_1.Person.findByIdAndUpdate(personId, { name }, { new: true });
        if (!updatedPerson) {
            return res
                .status(404)
                .json({ message: `Person with ID ${personId} not found` });
        }
        return res.status(200).json({ updatedPerson });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
exports.updatePersonById = updatePersonById;
//Delete a person
const deletePersonById = async (req, res, next) => {
    try {
        const personId = req.params.id;
        const deletedPerson = await personModel_1.Person.findByIdAndRemove(personId);
        if (!deletedPerson) {
            return res
                .status(404)
                .json({ message: `Person with ID ${personId} not found` });
        }
        return res.status(200).json({ message: "Person deleted successfully" });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
exports.deletePersonById = deletePersonById;
