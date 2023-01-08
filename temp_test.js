const webdriver = require('selenium-webdriver');
const firefox    = require('selenium-webdriver/firefox');

const test = async () => {
	const driver = new webdriver.Builder().forBrowser('firefox').setFirefoxOptions(new firefox.Options().headless()).build();
	console.log('Loading Webpage');
	await driver.get(`http://localhost:3000`);
	console.log("loaded page");
	const title = await driver.getTitle()
	console.log(title)
}
test();