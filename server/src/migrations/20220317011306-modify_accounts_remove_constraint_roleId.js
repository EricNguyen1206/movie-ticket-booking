"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Accounts", "fk_accounts_allcodes");
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addConstraint("Accounts", {
      fields: ["roleId"],
      type: "foreign key",
      name: "fk_accounts_allcodes",
      references: {
        //Required field
        table: "Allcodes",
        field: "keyMap",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },
};
