import Joi from 'joi';

const schemaProduct = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

export default schemaProduct;