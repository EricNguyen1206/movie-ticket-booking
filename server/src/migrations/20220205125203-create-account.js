"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Accounts", {
      email: {
        type: Sequelize.STRING(40),
        primaryKey: true,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      roleId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "Allcodes",
          key: "keyMap",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      verifyToken: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("Accounts");
  },
};
