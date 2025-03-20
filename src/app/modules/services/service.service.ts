import { StatusCodes } from "http-status-codes";
import AppError from "../../errors/AppError";
import { TService } from "./service.interface";
import { Service } from "./service.model";

const createServiceIntoDB = async (payload: TService) => {
    // call the Service model
    const result = await Service.create(payload)
    return result;
};
const updateServiceFromDB = async (
    id: string,
    payload: Partial<TService>,
) => {
    const result = await Service.findOneAndUpdate(
        { _id: id },
        payload,
        {
            new: true,
        },
    );

    return result;
};
const getALLServiceFromDB = async () => {
    const result = await Service.find()
    return result;
};
const getServiceFromDB = async (id: string) => {
    const result = await Service.findById(id);
    if (result == null) {
        throw new AppError(StatusCodes.NOT_FOUND, 'Service is not exist');
    }
    return result;
};
const deleteServiceFromDB = async (id: string) => {

    const isProjectsExists = await Service.findById(id);
    if (!isProjectsExists) {
        throw new AppError(StatusCodes.NOT_FOUND, 'This Project is not found !');
    }

    await Service.findByIdAndDelete(id);
};

export const ServiceServices = {
    createServiceIntoDB, updateServiceFromDB,
    getALLServiceFromDB, deleteServiceFromDB, getServiceFromDB
};