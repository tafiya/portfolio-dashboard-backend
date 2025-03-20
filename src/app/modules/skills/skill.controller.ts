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
const getAllSkills = catchAsync(async (req, res) => {
  const result = await SkillServices.getALLSkillFromDB();
  sendResponse(res, {
    message: 'Skills fetched successfully',
    statusCode: StatusCodes.OK,
    data: result,
  });
});
// get a single Skill
const getSkill = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await SkillServices.getSkillFromDB(id);
  sendResponse(res, {
    message: 'Skill fetched successfully',
    statusCode: StatusCodes.OK,
    data: result,
  });
});
const updateSkill = catchAsync(async (req, res) => {
  const { id } = req.params;
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

const deleteSkill = catchAsync(async (req, res) => {
  const { id } = req.params;
  await SkillServices.deleteSkillFromDB(id);
  sendResponse(res, {
    message: 'Skill deleted successfully',
    statusCode: StatusCodes.OK,
    data: "delete"

  });
});
export const SkillControllers = {
  createSkill, updateSkill, deleteSkill, getAllSkills, getSkill
};
