"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const HomePage_1 = require("../PageObject/HomePage");
const Others_1 = require("../PageObject/Others");
// var expect = chai.expect;
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
let objHome = new HomePage_1.Home();
let objOthers = new Others_1.Others();
protractor_1.browser.waitForAngularEnabled(false);
cucumber_1.Given("I launch the url {string}", { timeout: 60 * 1000 }, function (url) {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get(url).then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.driver.manage().window().maximize();
                yield protractor_1.browser.sleep(2000);
            });
        });
    });
});
cucumber_1.When('I click on Services', { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objHome.btnService.click();
        //await   browser.sleep(2000)
        //var service = element(by.xpath('//h2[.="Services"]'));
        //expect(service.getText()).to.eventually.equal('Services');
        //await chai.expect(objHome.validation_Service.getText).to.eventually.equal('Services')
        //expect(service.getText).to.equal("Services");
    });
});
cucumber_1.Then('I click on Team', { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objOthers.btnTeam.click();
        yield protractor_1.browser.sleep(2000);
        // await   browser.sleep(2000)
    });
});
cucumber_1.Then('I click on Kultur', { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objOthers.btnKultur.click();
        //await   browser.sleep(2000)
    });
});
cucumber_1.Then('I click on Projekte', { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objOthers.btnProject.click();
        //await   browser.sleep(2000)
    });
});
cucumber_1.Then('I click on jobs', { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objOthers.btnJob.click();
        // await   browser.sleep(2000)
    });
});
cucumber_1.Then('I click on Kontakt', { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objOthers.btncontact.click();
        yield protractor_1.browser.sleep(2000);
    });
});
cucumber_1.Before(function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.manage().deleteAllCookies();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RlcERlZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL0ZlYXR1cmVzL1N0ZXBEZWYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBbUQ7QUFDbkQsMkNBQWlEO0FBR2pELHFEQUEwQztBQUMxQyxpREFBOEM7QUFJOUMsNEJBQTRCO0FBRzVCLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMzQixJQUFJLGNBQWMsR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUVqRCxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3pCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFJekIsSUFBSSxPQUFPLEdBQUcsSUFBSSxlQUFJLEVBQUUsQ0FBQztBQUN6QixJQUFJLFNBQVMsR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO0FBQzVCLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdEMsZ0JBQUssQ0FBQywyQkFBMkIsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEdBQUcsSUFBSSxFQUFFLEVBQUUsVUFBZ0IsR0FBRzs7UUFDdEUsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUU7O2dCQUM3QixNQUFRLG9CQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNwRCxNQUFRLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQy9CLENBQUM7U0FBQSxDQUFDLENBQUE7SUFDTixDQUFDO0NBQUEsQ0FBQyxDQUFBO0FBR0YsZUFBSSxDQUFDLHFCQUFxQixFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsR0FBRyxJQUFJLEVBQUUsRUFBRTs7UUFDaEQsTUFBTSxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pDLDZCQUE2QjtRQUMvQix3REFBd0Q7UUFDdkQsNERBQTREO1FBQzVELHVGQUF1RjtRQUN2RiwrQ0FBK0M7SUFLbEQsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUdILGVBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEdBQUcsSUFBSSxFQUFFLEVBQUU7O1FBQzdDLE1BQU0sU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNoQyxNQUFRLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzVCLDhCQUE4QjtJQUNoQyxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLG1CQUFtQixFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsR0FBRyxJQUFJLEVBQUUsRUFBRTs7UUFDOUMsTUFBTSxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2xDLDZCQUE2QjtJQUNqQyxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBR0gsZUFBSSxDQUFDLHFCQUFxQixFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsR0FBRyxJQUFJLEVBQUUsRUFBRTs7UUFDaEQsTUFBTSxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25DLDZCQUE2QjtJQUNqQyxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsR0FBRyxJQUFJLEVBQUUsRUFBRTs7UUFDNUMsTUFBTSxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2hDLDhCQUE4QjtJQUNqQyxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBR0gsZUFBSSxDQUFFLG9CQUFvQixFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsR0FBRyxJQUFJLEVBQUUsRUFBRTs7UUFDaEQsTUFBTSxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25DLE1BQVEsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDL0IsQ0FBQztDQUFBLENBQUMsQ0FBQztBQU9ILGlCQUFNLENBQUM7O1FBQ0gsTUFBTSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDOUMsQ0FBQztDQUFBLENBQUMsQ0FBQSJ9