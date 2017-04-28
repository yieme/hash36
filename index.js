'use strict'

var hasha = require('hasha');
var base  = require('1636');

function hash(obj, param) {
  var val = hasha(obj, param)
  return base.to36(val)
}

function md5(obj, param) {
  param           = param || {}
  param.algorithm = 'md5'
  return hash(obj, param)
}

function sha1(obj, param) {
  param           = param || {}
  param.algorithm = 'sha1'
  return hash(obj, param)
}

function sha256(obj, param) {
  param           = param || {}
  param.algorithm = 'sha256'
  return hash(obj, param)
}

function sha512(obj, param) {
  param           = param || {}
  param.algorithm = 'sha512'
  return hash(obj, param)
}

module.exports = {
  hash:   hash,
  md5:    md5,
  sha1:   sha1,
  sha256: sha256,
  sha512: sha512,
};
