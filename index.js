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
  await page.waitFor('.download_links')

  const payload = await page.evaluate(() => {
    const getHref = selector => selector && selector.href

    return {
      hd: getHref(
        document.querySelector(
          '#search_results > div.download_links > p:nth-child(1) > a'
        )
      ),
      sd: getHref(
        document.querySelector(
          '#search_results > div.download_links > p:nth-child(2) > a'
        )
      ),
      mobile: getHref(
        document.querySelector(
          '#search_results > div.download_links > p:nth-child(3) > a'
        )
      )
    }
  })

  await page.close()
  return payload
}
