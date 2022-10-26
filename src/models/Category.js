const CategoryModel = (sequelize, DataType) => {
  const Category = sequelize.define(
    "Category",
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
      },
      name: DataType.STRING,
    },
    {
      timestamps: false,
      tableName: "categories",
    }
  );

  return Category;
};

module.exports = CategoryModel;
