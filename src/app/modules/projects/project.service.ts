// Project.service.ts
import { StatusCodes } from 'http-status-codes';
import AppError from '../../errors/AppError';
import { TProject } from './project.interface';
import { Project } from './project.model';


const createProjectsIntoDB = async (payload: TProject) => {

    const result = await Project.create(payload);
    return result;
};
// get all Projects data
const getALLProjectsFromDB = async () => {
    // const ProjectQuery = new QueryBuilder(Project.find().populate('author'), query)
    //   .search(ProjectSearchableFields)
    //   .sort()
    //   .filter();

    // const result = await ProjectQuery.modelQuery;
    const result = await Project.find()
    return result;
};
// get a single data
const getProjectFromDB = async (id: string) => {
    const result = await Project.findById(id);
    if (result == null) {
        throw new AppError(StatusCodes.NOT_FOUND, 'Project is not exist');
    }
    return result;
};
const updateProjectFromDB = async (
    id: string,
    payload: Partial<TProject>,

) => {

    const isProjectsExists = await Project.findById(id);
    if (!isProjectsExists) {
        throw new AppError(StatusCodes.NOT_FOUND, 'This Project is not found !');
    }
    const result = await Project.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });

    return result;
};
const deleteProjectFromDB = async (id: string) => {

    const isProjectsExists = await Project.findById(id);
    if (!isProjectsExists) {
        throw new AppError(StatusCodes.NOT_FOUND, 'This Project is not found !');
    }

    await Project.findByIdAndDelete(id);
};
export const ProjectServices = {
    createProjectsIntoDB,
    getALLProjectsFromDB,
    getProjectFromDB,
    updateProjectFromDB,
    deleteProjectFromDB,
};
