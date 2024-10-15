import Regions from '../models/Regions.js';
import Countries from '../models/Countries.js';

export default {
    async getRegions(req, res) {
        try {

            const regions = await Regions.findAll({
                order: [['id', 'ASC']],
            })

            res.status(200).json({
                message: 'Regions list',
                regions
            })

        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                error: e.message,
            });
        }
    },

    async getRegionsCountries(req, res) {
        try {
            const { regionId } = req.params

            const region = await Regions.findByPk(regionId);

            console.log(region)

            if (!region) {
                res.status(400).json({
                    message: 'Region is not a found.'
                });
                return;
            }

            const countries = await Countries.findAll({
                where: {
                    regionId: region.id
                }
            });

            if (!countries) {
                res.status(400).json({
                    message: 'countries is not a found.'
                });
                return;
            }

            res.status(200).json({
                message: 'Countries list',
                countries
            })

        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                error: e.message,
            });
        }
    }
}