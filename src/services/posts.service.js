const { BlogPost } = require('../models');

const createBlogPost = async (post) => {
  const result = await BlogPost.create(post);
  const postCreated = result.dataValues;
  postCreated.id = result.null;

  return postCreated;
};

const getAllPosts = async () => {
  const results = await BlogPost.findAll({
    // include: { model: User, as: 'user', attributes: { exclude: ['password'] } },
    include: { all: true, attributes: { exclude: ['password'] } },
    attributes: { exclude: ['user_id'] },
  });
  return results;
};

const getPostById = async (id) => {
  const results = await BlogPost.findOne({ 
    where: { id },
    // include: { model: User, as: 'user', attributes: { exclude: ['password'] } },
    include: { all: true, attributes: { exclude: ['password', 'PostCategory'] } },
    attributes: { exclude: ['user_id'] },
  });
  return results;
};

const updatePost = async (id, updateData) => {
  console.log('service', updateData);
  await BlogPost.update(updateData, {
    where: { id },
  });

  const results = await getPostById(id);

  return results;
};

module.exports = {
  createBlogPost,
  getAllPosts,
  getPostById,
  updatePost,
};
