# hash36

Crypto hashes in base36

## Install

```sh
npm i hash36 --save
```

## Use

```js
var hash = require('hash36')
hash.md5('hello')  // 2l5q82f2vf3q7fd9jxcqgxax02
hash.sha1('hello') // f0b08lb0hdhm40cejhtffui4j3zed0el
hash.sha256('hello') // 8vm6tnpm1er18q6bk8ahcwu3od71xwlh12f5trb48j78njsgaas
hash.sha512('hello') // 1x32k2sgmjz4vh9d8p2f7je5e7n29dnh2tshskajx1ba1ax92a2a0wzh6zdgczl2l6vf6261tho87ws66gkac6m83hpl08fa5sdkpxf
```

**hash(input, [options])**

Returns a hash.

**input**

Type: `buffer`, `string`, `array` of `string|buffer`

Buffer you want to hash.

While strings are supported you should prefer buffers as they're faster to hash. Though if you already have a string you should not convert it to a buffer.

Pass an array instead of concatenating strings and/or buffers. The output is the same, but arrays do not incur the overhead of concatenation.

**options**

**encoding**

Type: string
Default: `hex`
Values: `hex`, `base64`, `buffer`, `binary`

Encoding of the returned hash.

**algorithm**

Type: string
Default: `sha512`
Values: `md5`, `sha1`, `sha256`, `sha512`

## License MIT
