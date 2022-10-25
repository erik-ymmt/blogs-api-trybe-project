'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("posts_categories", {
      postId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'posts_id',
        references: {
          model: 'blog_post',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'category_id',
        references: {
          model: 'categories',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable("posts_categories");
  },
};
