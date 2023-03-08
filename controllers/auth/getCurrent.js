const getCurrent = async (req, res, next) => {
  console.log('get current');
  const { email } = req.user;

  res.json({ email });
};

module.exports = getCurrent;
