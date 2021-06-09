import { Given, When, Then} from "cucumber"
import { browser, element, by } from "protractor"
import chai from "chai"
import {Home} from"../PageObject/HomePage"
import { Others } from "../PageObject/Others";
var expect = chai.expect;
let objHome = new Home();
let objOthers = new Others();

Given('I launch the url', { timeout: 60 * 1000 }, async function (url) {
    await browser.get(url).then(async function () {
        await browser.driver.manage().window().maximize();
        await browser.sleep(10000)
    })
})

When('I click on Services', { timeout: 60 * 1000 }, async  function () {
    await objHome.btnService.click();

});


Then('I click on Team', { timeout: 60 * 1000 }, async function () {
   await objOthers.btnTeam.click();

});

Then('I click on Kultur', { timeout: 60 * 1000 }, async function () {
    await objOthers.btnKultur.click();

});


Then('I click on Projekte', { timeout: 60 * 1000 }, async function () {
    await objOthers.btnProject.click();

});

Then('I click on jobs', { timeout: 60 * 1000 }, async function () {
    await objOthers.btnJob.click();

});


Then ('I click on Kontakt', { timeout: 60 * 1000 }, async function () {
    await objOthers.btncontact.click();

});