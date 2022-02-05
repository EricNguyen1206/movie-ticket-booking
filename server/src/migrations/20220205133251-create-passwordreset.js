"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Passwordresets", {
      email: {
        type: Sequelize.STRING(40),
        allowNull: false,
        primaryKey: true,
        references: {
          model: "Accounts",
          key: "email",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      verifyToken: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      expires: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable("Passwordresets");
  },
};
