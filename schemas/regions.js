import Joi from "joi";

export default {
    getRegions: Joi.object({
        regionId: Joi.number().integer().positive().required(),
    }),
}