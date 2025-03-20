// Project.controller.ts
import { StatusCodes } from 'http-status-codes';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProjectServices } from './project.service';



const createProject = catchAsync(async (req, res) => {
    const result = await ProjectServices.createProjectsIntoDB(req.body);
    sendResponse(res, {
        message: 'Project created successfully',
        statusCode: StatusCodes.CREATED,
        data: result,
    });
});
const getAllProjects = catchAsync(async (req, res) => {
    const result = await ProjectServices.getALLProjectsFromDB();
    sendResponse(res, {
        message: 'Projects fetched successfully',
        statusCode: StatusCodes.OK,
        data: result,
    });
});
// get a single Project
const getProject = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await ProjectServices.getProjectFromDB(id);
    sendResponse(res, {
        message: 'Project fetched successfully',
        statusCode: StatusCodes.OK,
        data: result,
    });
});
const updateProject = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await ProjectServices.updateProjectFromDB(id, req.body);
    sendResponse(res, {
        message: 'Project updated successfully',
        statusCode: StatusCodes.OK,
        data: result,
    });
});

const deleteProject = catchAsync(async (req, res) => {
    const { id } = req.params;
    await ProjectServices.deleteProjectFromDB(id);
    sendResponse(res, {
        message: 'Project deleted successfully',
        statusCode: StatusCodes.OK,
        data: "deleted"

    });
});
export const ProjectControllers = {
    createProject,
    getAllProjects,
    getProject,
    updateProject,
    deleteProject,
};
