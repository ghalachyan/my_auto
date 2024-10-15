import Users from './models/Users.js';
import CarsModels from './models/CarsModels.js';
import Brands from './models/Brands.js';
import Regions from './models/Regions.js';
import Countries from './models/Countries.js';

const models = [
    Users,
    Brands,
    CarsModels,
    Regions,
    Countries
];

(async () => {
    for (const model of models) {
        await model.sync({ alter: true });
        console.log(`${model.name} table created or updated`);
    }
})()

export default models;