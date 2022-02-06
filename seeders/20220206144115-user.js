"use strict"

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         *
         */

        await queryInterface.bulkInsert(
            "Users",
            [
                {
                    name: "Awesome User",
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ],
            {}
        )
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
}
