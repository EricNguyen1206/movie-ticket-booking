"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Admins", {
      email: {
        type: Sequelize.STRING(40),
        primaryKey: true,
        allowNull: false,
        references: {
          model: "Accounts",
          key: "email",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      firstName: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      avatar: {
        type: Sequelize.BLOB("long"),
      },
      birthday: {
        type: Sequelize.DATE,
      },
      gender: {
        type: Sequelize.STRING(10),
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
    await queryInterface.dropTable("Admins");
  },
};
