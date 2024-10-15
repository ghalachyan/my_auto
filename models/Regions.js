import { Model, DataTypes } from 'sequelize';
import sequelize from '../clients/sequelize.mysql.js';

class Regions extends Model { }

Regions.init({
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },

    regionName: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

}, {
    sequelize,
    timestamps: false,
    modelName: 'regions',
    tableName: 'regions',
});

export default Regions;