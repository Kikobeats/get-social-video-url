# get-social-video-url

![Last version](https://img.shields.io/github/tag/Kikobeats/get-social-video-url.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/Kikobeats/get-social-video-url/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/get-social-video-url)
[![Dependency status](https://img.shields.io/david/Kikobeats/get-social-video-url.svg?style=flat-square)](https://david-dm.org/Kikobeats/get-social-video-url)
[![Dev Dependencies Status](https://img.shields.io/david/dev/Kikobeats/get-social-video-url.svg?style=flat-square)](https://david-dm.org/Kikobeats/get-social-video-url#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/get-social-video-url.svg?style=flat-square)](https://www.npmjs.org/package/get-social-video-url)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> Get video URL from a social link (Facebook/Twitter/Vimeo/etc).

## Install

> NOTE: It needs to pass a [browserless](https://browserless.js.org) instance.

```bash
$ npm install get-social-video-url --save
```

## Usage

```js
const getSocialVideoUrl = require('get-social-video-url')
const browserless = require('browserless')()

;(async () => {
  const videoQualities = await getSocialVideoUrl({
    url: 'https://twitter.com/verge/status/957383241714970624',
    browserless
  })()

  console.log(videoQualities)
  // [
  //   'https://video.twimg.com/amplify_video/943561675927519232/vid/720x720/h1uN7biCI-Fbzm9D.mp4',
  //   'https://video.twimg.com/amplify_video/943561675927519232/vid/480x480/qURzB_XtWBE-dvRa.mp4',
  //   'https://video.twimg.com/amplify_video/943561675927519232/vid/240x240/mijiQdCq-p9FaO8H.mp4'
  // ]
})()
```

Qualities are sorted from high to low.

See [example](/example.js) for more.

## License

**get-social-video-url** © [Kiko Beats](https://kikobeats.com), released under the [MIT](https://github.com/Kikobeats/get-social-video-url/blob/master/LICENSE.md) License.<br>
Authored and maintained by Kiko Beats with help from [contributors](https://github.com/Kikobeats/get-social-video-url/contributors).

> [kikobeats.com](https://kikobeats.com) · GitHub [Kiko Beats](https://github.com/Kikobeats) · Twitter [@Kikobeats](https://twitter.com/Kikobeats)
