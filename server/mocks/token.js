module.exports = function(app) {
  var express = require('express');
  var tokenRouter = express.Router();

  tokenRouter.post('/token', function(req, res) {
    console.log(req);
    if (req.body.grant_type === 'password') {
      if (req.body.username === 'letme' && req.body.password === 'in') {
        res.status(200).send('{ "access_token": "secret token!" }');
      } else {
        res.status(400).send('{ "error": "invalid_grant" }');
      }
    } else {
      res.status(400).send('{ "error": "unsupported_grant_type" }');
    }
  });
  app.use('/', tokenRouter);
};
