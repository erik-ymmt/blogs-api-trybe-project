const loginRequest = (req, res) => {
  const user = req.body;
  res.status(200).json({ user });
};

module.exports = {
  loginRequest,
};