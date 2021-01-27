module.exports = (req, res) => {
  res.send(req.headers['x-forwarded-for'])
}
