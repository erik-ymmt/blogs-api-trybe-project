const PostCategoryModel = (sequelize, DataType) => {
  const PostCategory = sequelize.define(
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

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      foreignKey: 'post_id',
      otherKey: 'category_id',
      through: PostCategory,
    }),

    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      foreignKey: 'category_id',
      otherKey: 'post_id',
      through: PostCategory,
    })
  }

  return PostCategory;
};

module.exports = PostCategoryModel;
