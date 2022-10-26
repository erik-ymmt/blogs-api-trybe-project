const { BlogPost } = require('../models');

const getRegisteredPosts = async () => {
  const result = await BlogPost.findAll({
    attributes: ['id'],
  });
  const ids = result.map((element) => element.dataValues.id);

  return ids;
};

module.exports = getRegisteredPosts;