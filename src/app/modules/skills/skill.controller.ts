import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import { SkillServices } from "./skills.service";
import sendResponse from "../../utils/sendResponse";

const createSkill = catchAsync(async (req, res) => {
    const result =
      await SkillServices.createSkillIntoDB(req.body);
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: 'Skill created successfully',
      data: result,
    });
  });
  const updateSkill= catchAsync(async (req, res) => {
    const {id} = req.params;
    const result =
      await SkillServices.updateSkillFromDB(
        id,
        req.body,
      );
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: 'Skill is updated successfully',
      data: result,
    });
  });
  export const SkillControllers = {
    createSkill,updateSkill
  };
