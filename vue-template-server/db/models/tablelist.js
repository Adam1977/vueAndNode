'use strict';
module.exports = (sequelize, DataTypes) => {
  const tableList = sequelize.define('tableList', {
    name: DataTypes.STRING,
    deadline: DataTypes.DATE,
    content: DataTypes.STRING,
    status: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
  }, {
    timestamps: false
  });
  tableList.associate = function(models) {
    // associations can be defined here
  };
  return tableList;
};
