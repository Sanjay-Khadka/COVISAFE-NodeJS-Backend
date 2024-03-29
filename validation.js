import Joi from "joi";

export const registerValidation = (data) => {
  const schema = Joi.object({
    fullname: Joi.string().min(6).required(),
    email: Joi.string().min(7).required().trim().email(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

export const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(7).required().trim().email(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};
