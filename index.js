'use strict'

module.exports = async ({ url, browserless }) => {
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
