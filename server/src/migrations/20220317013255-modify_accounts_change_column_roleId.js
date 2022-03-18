"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("Accounts", "roleId", {
      type: Sequelize.INTEGER,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("Accounts", "roleId", {
      type: Sequelize.STRING,
    });
  },
};
