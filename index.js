'use strict'

const parseDomain = require('parse-domain')

const SUPPORTED_PROVIDERS = [
  'dailymotion',
  'facebook',
  'vimeo',
  'twitter',
  'vine',
  'aol',
  'rumble',
  'streamable',
  'liveleak',
  'ustream',
  'break',
  'collegehumor',
  'coub',
  'flickr',
  'focus',
  'gmx',
  'web',
  'howcast',
  'magisto',
  'metacafe',
  'mgoon',
  'miomio',
  'rutube',
  'sapo',
  'tagstory',
  'tiscali',
  'tu',
  'tudou',
  'tvuol',
  'veoh',
  'videochart',
  'mthai',
  'online',
  'vidmax',
  'worldstarhiphop',
  'youku'
]

const isSupportedProvider = url => SUPPORTED_PROVIDERS.includes(parseDomain(url).domain)

module.exports = async ({ url, browserless }) => {
  if (!isSupportedProvider(url)) return []

  const page = await browserless.page()

  await browserless.goto(page, {
    url: 'http://savevideo.me',
    abortTypes: ['image', 'media', 'stylesheet', 'font']
  })

  await page.click('#url')
  await page.keyboard.type(url)
  await page.click('#sub_bl > input')

  await page.waitFor(() =>
    document.querySelector('.download_links') ||
    document.querySelector('.error')
  )

  const payload = await page.evaluate(() => {
    const getQuality = n => `#search_results > div.download_links > p:nth-child(${n}) > a`
    const qualities = []
    let index = 0

    while (true) {
      const el = document.querySelector(getQuality(++index))
      if (el) qualities.push(el.href)
      else break
    }

    return qualities
  })

  await page.close()
  return payload
}
