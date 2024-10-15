import Joi from "joi";

export default {
    getModels: Joi.object({
        manufacturer:Joi.string().min(1).max(50).required(),
    }),
}