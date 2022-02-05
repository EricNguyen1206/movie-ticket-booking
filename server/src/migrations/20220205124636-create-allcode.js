"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Allcodes", {
      keyMap: {
        type: Sequelize.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      type: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      value: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Allcodes");
  },
};
