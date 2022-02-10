"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Allcodes", [
      {
        keyMap: "R1",
        type: "ROLE",
        value: "Admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        keyMap: "R2",
        type: "ROLE",
        value: "User",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Allcodes", null, {});
  },
};
