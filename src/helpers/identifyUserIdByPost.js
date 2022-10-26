const { BlogPost } = require('../models');

const identifyUserIdByPost = async (id) => {
  const result = await BlogPost.findOne({ where: { id } });
  if (!result) return null;
  const { userId } = result.dataValues;
  return userId;
};

module.exports = identifyUserIdByPost;