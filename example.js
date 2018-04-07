'use strict'

const { URL } = require('url')
const browserless = require('browserless')()

const getSocialVideoUrl = require('./')

const url = new URL(process.argv[2])
;(async () => {
  try {
    const data = await getSocialVideoUrl({ url: url.toString(), browserless })
    console.log(data)
    process.exit()
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
})()
