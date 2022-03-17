"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Roles", [
      {
        roleId: 1,
        roleName: "Admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 2,
        roleName: "User",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Roles", null, {});
  },
};
