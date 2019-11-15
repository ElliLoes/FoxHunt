/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  var UserGame = sequelize.define("UserGame", {
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id",
        allowNull: false
      }
      // allowNull: false
      // validate: {

      // }
    },
    game_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "games",
        key: "id",
        allowNull: false
      }
      // allowNull: false
      // validate: {

      // }
    },
    game_points: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
      // validate: {

      // }
    },
    start_time: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
      // validate: {

      // }
    },
    game_finished: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
      // validate: {

      // }
    }
  });
  return UserGame;
};
