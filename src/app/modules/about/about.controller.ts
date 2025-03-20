import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AboutServices } from "./about.service";

const createAbout = catchAsync(async (req, res) => {
    const result =
      await AboutServices.createAboutIntoDB(req.body);
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: 'About created successfully',
      data: result,
    });
  });
  const updateAbout = catchAsync(async (req, res) => {
    const {id} = req.params;
    const result =
      await AboutServices.updateAboutFromDB(
        id,
        req.body,
      );
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: 'About is updated successfully',
      data: result,
    });
  });
  export const AboutControllers = {
    createAbout,updateAbout
  };
