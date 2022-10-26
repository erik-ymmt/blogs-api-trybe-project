const BlogPostModel = (sequelize, DataType) => {
  const BlogPost = sequelize.define(
    "BlogPost",
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
      },
      title: DataType.STRING,
      content: DataType.STRING,
      userId: DataType.STRING,
      published: DataType.DATE,
      updated: DataType.DATE,
    },
    {
      tableName: "blog_posts",
      timestamps: false,
      underscored: true,
    }
  );

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      as:'user',
      foreignKey: 'user_id'
    })
  }

  return BlogPost;
};

module.exports = BlogPostModel;
