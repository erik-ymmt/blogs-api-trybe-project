const PostsCategoriesModel = (sequelize, DataType) => {
  const PostsCategories = sequelize.define(
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

  // PostsCategories.associate = (models) => {
  //   models.Blog
  // }

  return PostsCategories;
};

module.exports = PostsCategoriesModel;
