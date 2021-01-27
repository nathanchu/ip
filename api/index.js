module.exports = (req, res) => {
  res.setHeader('Content-Type', 'text/plain')
  res.send((req.headers['x-forwarded-for'] || req.ip || '0.0.0.0') + \n)
}
