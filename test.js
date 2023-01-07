const webdriver = require('selenium-webdriver');
const chrome    = require('selenium-webdriver/chrome');
const { By } = require('selenium-webdriver');
const assert = require('assert');
const screen = {
  width: 640,
  height: 480
};

describe('webdriver', () => {
    let driver;
    before(async () => {
      driver = new webdriver.Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().headless())
      .build();
     
      await driver.get(`http://localhost:3000`);
    }, 30000);
  
    after(async () => {
        console.log("\nTests Completed!!\n");
        await setTimeout(function() {
            driver.quit();
          }, 2000);
    }, 40000);
  
    it('test App loads', async () => {
      const title = await driver.getTitle()
      console.log(title)
      assert.equal(title, "Node To Do Application");
    }, 2000);

    it('Clear previous tasks', async () => {
      await driver.findElement(By.css("#btnClr")).click();    
      const added_tasksUpdated = await driver.findElements(By.css(".added-tasks"))
      assert.equal(added_tasksUpdated.length, 0);
    }, 2000);

    it('Add new task', async () => {
      const added_tasks = await driver.findElements(By.css(".added-tasks"))
      const field = await driver.findElement(By.css(".add-task-input"))
      // console.log(field);
      await field.sendKeys("New Task");
      await driver.findElement(By.css(".add-btn")).click();
      const added_tasksUpdated = await driver.findElements(By.css(".added-tasks"))
      assert.equal(added_tasksUpdated.length, added_tasks.length+1);
      
    }, 5000);

    it('Verify newely added task', async () => {
      const added_tasks = await driver.findElements(By.css(".added-tasks-input"))
      assert.equal(await added_tasks[added_tasks.length-1].getText(), "New Task");
    }, 2000);

    it('Remove New Added Tasks', async () => {
      await driver.findElement(By.css(".remove-task")).click();
      const added_tasks = await driver.findElements(By.css(".added-tasks-input"))
      assert.equal(added_tasks.length, 0);
    }, 2000);
  
});