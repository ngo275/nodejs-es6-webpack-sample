// @flow

export default (sequelize, DataTypes) => {
  var Favorite = sequelize.define('Favorite', {
    username: DataTypes.STRING,
    childBirthDay: DataTypes.STRING,
  });

  return Favorite;
};