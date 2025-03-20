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
  const updateEducation = catchAsync(async (req, res) => {
    const {id} = req.params;
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
  export const EducationControllers = {
    createEducation,updateEducation
  };
