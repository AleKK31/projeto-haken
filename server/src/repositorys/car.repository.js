import { prisma } from "../services/prisma.js";

export const createCar = async (data) => {
    const car = await prisma.car.create({
        data,
    });
    return car;
};

export const getAll = async () => {
    const cars = await prisma.car.findMany({});
    return cars;
};

export const getById = async (id) => {
    const car = await prisma.car.findUnique({
        where: {
            id,
        },
    });
    return car;
};

export const updateCar = async (id, data) => {
    const car = await prisma.car.update({
        where: {
            id,
        },
        data,
    });
    return car;
};

export const deleteCar = async (id) => {
    await prisma.car.delete({
        where: {
            id,
        },
    });
    return;
};

export const getByParam = async (query) => {
    const { q } = query;
    const car = await prisma.car.findMany({
        where: {
            OR: [
                {veiculo: query.q}, 
                {marca: query.q}
            ]
        }
    });
    return car;
};