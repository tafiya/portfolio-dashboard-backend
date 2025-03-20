import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { EducationServices } from "./education.service";


const createEducation = catchAsync(async (req, res) => {
  const result =
    await EducationServices.createEducationIntoDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Education created successfully',
    data: result,
  });
});
const getAllEducations = catchAsync(async (req, res) => {
  const result = await EducationServices.getALLEducationFromDB();
  sendResponse(res, {
    message: 'Educations fetched successfully',
    statusCode: StatusCodes.OK,
    data: result,
  });
});
const getEducation = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await EducationServices.getEducationFromDB(id);
  sendResponse(res, {
    message: 'Education fetched successfully',
    statusCode: StatusCodes.OK,
    data: result,
  });
});
const updateEducation = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result =
    await EducationServices.updateEducationFromDB(
      id,
      req.body,
    );
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Education is updated successfully',
    data: result,
  });
});
const deleteEducation = catchAsync(async (req, res) => {
  const { id } = req.params;
  await EducationServices.deleteEducationFromDB(id);
  sendResponse(res, {
    message: 'Education deleted successfully',
    statusCode: StatusCodes.OK,
    data: "deleted"

  });
});
export const EducationControllers = {
  createEducation, updateEducation, getAllEducations, deleteEducation, getEducation
};
