import { Model, DataTypes } from 'sequelize';
import sequelize from '../clients/sequelize.mysql.js';

class Brands extends Model { }

Brands.init({
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },

    manufacturer: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

    cyrillicName: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
}, {
    sequelize,
    timestamps: false,
    modelName: 'brands',
    tableName: 'brands',
});

export default Brands;