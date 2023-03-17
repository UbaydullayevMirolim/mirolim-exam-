const jwt = require('jsonwebtoken');

const sign = (payload)=>
  jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '12h'});

    const verify = (payload )=>
  jwt.verify(payload, process.env.JWT_SECRET)


  module.exports = {
    sign,
    verify
  }