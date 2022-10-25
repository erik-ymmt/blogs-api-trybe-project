const UserModel = (sequelize, DataType) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
      },
      displayName: DataType.STRING,
      email: DataType.STRING,
      password: DataType.STRING,
      image: DataType.STRING,
    },

    {
      timestamps: false,
      underscored: true,
      tableName: "users",
    }
  );

  return User;
};

module.exports = UserModel;
