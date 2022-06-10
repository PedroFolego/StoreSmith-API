import Joi from 'joi';

const schemaUser = Joi.object({
  username: Joi.string().min(3).required(),
  classe: Joi.string().min(3).required(),
  level: Joi.number().greater(1).required().messages({
    'number.greater': '"level" must be greater than or equal to 1',
  }),
  password: Joi.string().min(8).required(),
});

export default schemaUser;