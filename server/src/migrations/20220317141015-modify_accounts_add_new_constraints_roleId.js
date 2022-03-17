"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("Accounts", {
      fields: ["roleId"],
      type: "foreign key",
      name: "fk_roleId_account_role",
      references: {
        //Required field
        table: "Roles",
        field: "roleId",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Accounts", "fk_roleId_account_role");
  },
};
