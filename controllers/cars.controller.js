import Brands from '../models/Brands.js';
import CarsModels from '../models/CarsModels.js';

export default {
    async getBrands(req, res) {
        try {
           
            const models = await Brands.findAll({
                order: [['id', 'ASC']],
            })

            res.status(200).json({
                message: 'Brands list',
                models
            })

        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                error: e.message,
            });
        }
    },

    async getModels(req, res) {
        try {
            const {manufacturer} = req.query

            const models = await CarsModels.findAll({
                where: {
                    manufacturer
                },
            })

            res.status(200).json({
                message: 'Models list',
                models
            })

        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                error: e.message,
            });
        }
    },
}