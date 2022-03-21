const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PageComponent extends Model {}

PageComponent.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    x: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    y: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    w: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    h: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    page_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'page',
        key: 'id',
      },
    },
    component_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'component',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'pageComponent',
  }
);

module.exports = PageComponent;
