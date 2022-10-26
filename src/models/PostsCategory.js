const PostsCategoryModel = (sequelize, DataType) => {
  const PostsCategory = sequelize.define(
    "BlogPost",
    {
      postId: {
        type: DataType.INTEGER,
        primaryKey: true,
      },
      categoryId: {
        type: DataType.INTEGER,
        primaryKey: true,
      },
    },
    {
      tableName: "posts_categories",
      timestamps: false,
      underscored: true,
    }
  );

  PostsCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      foreignKey: 'post_id',
      otherKey: 'category_id',
      through: PostsCategory,
    }),

    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      foreignKey: 'category_id',
      otherKey: 'post_id',
      through: PostsCategory,
    })
  }

  return PostsCategory;
};

module.exports = PostsCategoryModel;
