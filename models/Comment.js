const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTERGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        message: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        blogger_id: {
            type: DataTypes.INTERGER,
            references: {
                model: 'blogger',
                key: 'id',
            },
        },
        post_id: {
            type: DataTypes.INTERGER,
            references: {
                model: 'post',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
);

module.exports = Comment;