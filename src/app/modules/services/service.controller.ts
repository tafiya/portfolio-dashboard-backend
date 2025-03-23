import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ServiceServices } from "./service.service";



const createService = catchAsync(async (req, res) => {
    const result = await ServiceServices.createServiceIntoDB(req.body);
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        message: 'Service created successfully',
        data: result,
    });
});
const getAllServices = catchAsync(async (req, res) => {
    const result = await ServiceServices.getALLServiceFromDB();
    sendResponse(res, {
        message: 'Services fetched successfully',
        statusCode: StatusCodes.OK,
        data: result,
    });
});
const getService = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await ServiceServices.getServiceFromDB(id);
    sendResponse(res, {
        message: 'Service fetched successfully',
        statusCode: StatusCodes.OK,
        data: result,
    });
});
const updateService = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result =
        await ServiceServices.updateServiceFromDB(
            id,
            req.body,
        );
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        message: 'Service is updated successfully',
        data: result,
    });
});
const deleteService = catchAsync(async (req, res) => {
    const { id } = req.params;
    await ServiceServices.deleteServiceFromDB(id);
    sendResponse(res, {
        message: 'Service deleted successfully',
        statusCode: StatusCodes.OK,
        data: "deleted"

    });
});
export const ServiceControllers = {
    createService, updateService, getAllServices, deleteService, getService
};
