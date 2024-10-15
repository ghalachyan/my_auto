import { Model, DataTypes } from 'sequelize';
import sequelize from '../clients/sequelize.mysql.js';

class CarsModels extends Model { }

CarsModels.init({
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },

    manufacturer: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    modelName: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

    category: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    yearFrom: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },

    yearTo: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },

}, {
    sequelize,
    timestamps: false,
    modelName: 'carsModels',
    tableName: 'carsModels',
});

export default CarsModels;