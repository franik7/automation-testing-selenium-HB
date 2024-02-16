const { Builder, Capabilities, By, until, Key } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().withCapabilities(Capabilities.chrome()).build();
  await driver.get("http://localhost:3000/");
});

// Quit a driver after each test
afterEach(async () => {
//   await driver.quit();
});

describe("testing movies website", () => {
   
    test("Adding, checking, removing a movie", async () => {

    //TODO: Test if we can add a movie
    await driver.findElement(By.name('movieTitle')).sendKeys("The Matrix", Key.RETURN);
    await driver.findElement(By.name('movieTitle')).sendKeys("Rush Hour", Key.RETURN);
    await driver.findElement(By.name('movieTitle')).sendKeys("Rush Hour 2", Key.RETURN);
    
    //TODO: Test if we can check box next to the movie 1
    await driver.findElement(By.id('movie-0')).click();

    //TODO: Test if we get the message when the checkbox next to the movie is checked and that it disappears
    await driver.wait(until.elementIsNotVisible(driver.findElement(By.id('message'))), 1000);

    //TODO: Test if we can check box next to the movie 2
    await driver.findElement(By.id('movie-1')).click();

    //TODO: Test if we get the message when the checkbox next to the movie is checked and that it disappears
    await driver.wait(until.elementIsNotVisible(driver.findElement(By.id('message'))), 1000);

    //TODO: Test if we can check box next to the movie 3
    await driver.findElement(By.id('movie-2')).click();

    //TODO: Test if we get the message when the checkbox next to the movie is checked and that it disappears
    await driver.wait(until.elementIsNotVisible(driver.findElement(By.id('message'))), 1000);

    //TODO: Test we can delete movie 2 only
    let deleteMovie2 = await driver.findElement(By.id('movie-1')).findElement(By.className('delete-btn'));
    await deleteMovie2.click();

    //TODO: Test if we get the message when the checkbox next to the movie is checked and that it disappears
    await driver.wait(until.elementIsNotVisible(driver.findElement(By.id('message'))), 1000);
    })
})
