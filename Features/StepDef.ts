import { Given, When, Then, Before} from "cucumber"
import { browser, element, by } from "protractor"
import chai from "chai"
import { expect,assert } from "chai"
import {Home} from"../PageObject/HomePage"
import { Others } from "../PageObject/Others";



// var expect = chai.expect;


var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;



let objHome = new Home();
let objOthers = new Others();
 browser.waitForAngularEnabled(false);
Given("I launch the url {string}", { timeout: 60 * 1000 }, async function (url) {
        await browser.get(url).then( async function () {
        await   browser.driver.manage().window().maximize();
        await   browser.sleep(2000)
    })
})


When('I click on Services', { timeout: 60 * 1000 }, async  function () {
    await objHome.btnService.click();
    //await   browser.sleep(2000)
  //var service = element(by.xpath('//h2[.="Services"]'));
   //expect(service.getText()).to.eventually.equal('Services');
   //await chai.expect(objHome.validation_Service.getText).to.eventually.equal('Services')
   //expect(service.getText).to.equal("Services");
  
  
    
    
});


Then('I click on Team', { timeout: 60 * 1000 }, async function () {
   await objOthers.btnTeam.click();
   await   browser.sleep(2000)
  // await   browser.sleep(2000)
});

Then('I click on Kultur', { timeout: 60 * 1000 }, async function () {
    await objOthers.btnKultur.click();
    //await   browser.sleep(2000)
});


Then('I click on Projekte', { timeout: 60 * 1000 }, async function () {
    await objOthers.btnProject.click();
    //await   browser.sleep(2000)
});

Then('I click on jobs', { timeout: 60 * 1000 }, async function () {
    await objOthers.btnJob.click();
   // await   browser.sleep(2000)
});


Then ('I click on Kontakt', { timeout: 60 * 1000 }, async function () {
    await objOthers.btncontact.click();
    await   browser.sleep(2000)
});






Before(async function () {
    await browser.manage().deleteAllCookies();
})

