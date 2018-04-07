'use strict'

const test = require('ava')

const browserless = require('browserless')({
  args: ['--disable-gpu', '--single-process', '--no-zygote', '--no-sandbox']
})

const serialize = payload =>
  Object.keys(payload).map(videoQuality => ({
    [videoQuality]: typeof payload[videoQuality]
  }))

const getSocialVideoUrl = require('..')

test('twitter', async t => {
  const payload = await getSocialVideoUrl({
    url: 'https://twitter.com/verge/status/957383241714970624',
    browserless
  })

  t.snapshot(serialize(payload))
})

test('facebook', async t => {
  const payload = await getSocialVideoUrl({
    url: 'https://www.facebook.com/afcajax/videos/1686831701364171',
    browserless
  })
  t.snapshot(serialize(payload))
})

test('vimeo', async t => {
  const payload = await getSocialVideoUrl({
    url: 'https://vimeo.com/188175573',
    browserless
  })
  t.snapshot(serialize(payload))
})

test('not supported url', async t => {
  const payload = await getSocialVideoUrl({
    url: 'https://github.com/microlinkhq/sdk/blob/master/packages/react-microlink/package.json',
    browserless
  })

  t.snapshot(serialize(payload))
})
