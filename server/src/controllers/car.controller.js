import { carValidation } from "../validations/car.validation.js";
import { createCar, getAll, getById, updateCar, deleteCar, getByParam } from "../repositorys/car.repository.js";

export const create = async (req, res) => {
    try {
        await carValidation.validate(req.body);

        const car = await createCar(req.body);
        res.status(200).send(car);
    } catch (e) {
        res.status(400).send(e);
    }
};

export const get = async (req, res) => {
    try {
        const cars = await getAll();
        res.status(200).send(cars);
    } catch (e){
        res.status(400).send(e);
    }
};

export const getId = async (req, res) => {
    try {
        const car = await getById(Number(req.params.id));
        res.status(200).send(car);
    } catch (e){
        res.status(400).send(e);
    }
};

export const update = async (req, res) => {
    try {
        const car = await updateCar(Number(req.params.id), req.body);
        res.status(200).send(car);
    } catch (e){
        res.status(400).send(e);
    }
};

export const del = async (req, res) => {
    try {
        await deleteCar(Number(req.params.id));
        res.status(200).send();
    } catch (e){
        res.status(400).send(e);
    }
};

export const getParms = async (req, res) => {
    try {
        const car = await getByParam(req.query);
        res.status(200).send(car);
    } catch (e){
        res.status(400).send(e);
    }
};
