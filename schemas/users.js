import Joi from 'joi';

export default {
    registration: Joi.object({
        firstName: Joi.string().trim().min(2).max(20).optional(),
        lastName: Joi.string().trim().min(2).max(20).optional(),
        number: Joi.string().pattern(/^\+374(?:[1-9]\d{0,7})$/).required()
            .messages({
                'string.empty': 'Phone number is required',
                'string.pattern.base': 'Phone number must be a valid Armenian format (+374XXXXXXXX)',
            }),
        password: Joi.string().trim().min(8).max(16).required(),
    }),

    login: Joi.object({
        number: Joi.string().pattern(/^\+374(?:[1-9]\d{0,7})$/).required()
        .messages({
            'string.empty': 'Phone number is required',
            'string.pattern.base': 'Phone number must be a valid Armenian format (+374XXXXXXXX)',
        }),        password: Joi.string().trim().min(8).max(16).required()
    }),
}