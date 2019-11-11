/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  var UserTask = sequelize.define("UserTask", {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id"
      }
    },
    task_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "tasks",
        key: "id"
      }
    },
    task_done: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    }
  });
  return UserTask;
};