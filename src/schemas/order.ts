import Joi from 'joi';

const schemaOrder = Joi.object({
  productsIds: Joi.array().items(Joi.number().required()).required(),
});

export default schemaOrder;