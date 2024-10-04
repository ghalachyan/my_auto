import md5 from "md5";

import { DataTypes, Model } from 'sequelize';
import sequelize from '../clients/sequelize.mysql.js';

const { USER_PASSWORD_SECRET } = process.env;

class Users extends Model {
    static  hash (password){
        return md5(md5(password) + USER_PASSWORD_SECRET);
    }
}

Users.init(
    {
        id: {
            type: DataTypes.BIGINT.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },

        firstName: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        lastName: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        number: {
            type: DataTypes.STRING,
            allowNull: false
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
            get() {
                return '😁';
            },
            set (value) {
                this.setDataValue('password', Users.hash(value));
            },
        },

        role: {
            type: DataTypes.ENUM('user', 'admin'),
            defaultValue: 'user',
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: true,
        modelName: 'users',
        tableName: 'users',
        indexes: [
            {
                unique: true,
                fields: ['number'],
            }
        ]
    }
);


export default Users;