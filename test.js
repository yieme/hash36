'use strict'

var hash = require('./')

function assert(ok, msg) {
  console.log(msg, (ok) ? 'OK' : 'ERROR')
  if (!ok) process.exit(1)
}

assert(hash.md5('hello') == '2l5q82f2vf3q7fd9jxcqgxax02', 'md5 hello 2l5q82f2vf3q7fd9jxcqgxax02')
assert(hash.sha1('hello') == 'f0b08lb0hdhm40cejhtffui4j3zed0el', 'md5 hello f0b08lb0hdhm40cejhtffui4j3zed0el')
assert(hash.sha256('hello') == '8vm6tnpm1er18q6bk8ahcwu3od71xwlh12f5trb48j78njsgaas', 'md5 hello 8vm6tnpm1er18q6bk8ahcwu3od71xwlh12f5trb48j78njsgaas')
assert(hash.sha512('hello') == '1x32k2sgmjz4vh9d8p2f7je5e7n29dnh2tshskajx1ba1ax92a2a0wzh6zdgczl2l6vf6261tho87ws66gkac6m83hpl08fa5sdkpxf', 'md5 hello 1x32k2sgmjz4vh9d8p2f7je5e7n29dnh2tshskajx1ba1ax92a2a0wzh6zdgczl2l6vf6261tho87ws66gkac6m83hpl08fa5sdkpxf')
