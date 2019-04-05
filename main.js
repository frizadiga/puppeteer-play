const puppeteer = require('puppeteer');

const url = 'https://news.ycombinator.com';

const screenshot = async () => {
  const browser = await puppeteer.launch();

  try {
    const page = await browser.newPage();
    await page.goto(url);
    await page.screenshot({ path: 'ss.png' }); 
  } catch (error) {
    console.log('debug', { error })
  } finally {
    await browser.close();
  }
};

const pdf = async () => {
  const browser = await puppeteer.launch();
  try {
    const page = await browser.newPage();
    await page.goto(url);
    await page.pdf({ path: 'document.pdf', format: 'A4' });
  } catch (error) {
    console.log('debug', { error });
  } finally {
    await browser.close();
  }
};

const main = () => {
  // screenshot();
  pdf()
};

main();