"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Movie.init(
    {
      movieId: { type: DataTypes.INTEGER, primaryKey: true },
      name: DataTypes.STRING(100),
      description: DataTypes.STRING,
      image: DataTypes.BLOB("long"),
    },
    {
      sequelize,
      modelName: "Movie",
    }
  );
  return Movie;
};
