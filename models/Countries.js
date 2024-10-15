import Regions from './Regions.js';

import { Model, DataTypes } from 'sequelize';
import sequelize from '../clients/sequelize.mysql.js';

class Countries extends Model { }

Countries.init({
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },

    countryName: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

}, {
    sequelize,
    timestamps: false,
    modelName: 'countries',
    tableName: 'countries',
});

Regions.hasMany(Countries, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    foreignKey: 'regionId',
});

Countries.belongsTo(Regions);

export default Countries;