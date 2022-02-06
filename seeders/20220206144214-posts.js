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
            "Posts",
            [
                {
                    title: "Article One",
                    description: "This is the first article",
                    userId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    title: "Article Two",
                    description: "This is the second article",
                    userId: 1,
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
