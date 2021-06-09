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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
const HomePage_1 = require("../PageObject/HomePage");
const Others_1 = require("../PageObject/Others");
var expect = chai_1.default.expect;
let objHome = new HomePage_1.Home();
let objOthers = new Others_1.Others();
cucumber_1.Given('I launch the url', { timeout: 60 * 1000 }, function (url) {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get(url).then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.driver.manage().window().maximize();
                yield protractor_1.browser.sleep(10000);
            });
        });
    });
});
cucumber_1.When('I click on Services', { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objHome.btnService.click();
    });
});
cucumber_1.Then('I click on Team', { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objOthers.btnTeam.click();
    });
});
cucumber_1.Then('I click on Kultur', { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objOthers.btnKultur.click();
    });
});
cucumber_1.Then('I click on Projekte', { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objOthers.btnProject.click();
    });
});
cucumber_1.Then('I click on jobs', { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objOthers.btnJob.click();
    });
});
cucumber_1.Then('I click on Kontakt', { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objOthers.btncontact.click();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RlcERlZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL0ZlYXR1cmVzL1N0ZXBEZWYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBMkM7QUFDM0MsMkNBQWlEO0FBQ2pELGdEQUF1QjtBQUN2QixxREFBMEM7QUFDMUMsaURBQThDO0FBQzlDLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFDekIsSUFBSSxPQUFPLEdBQUcsSUFBSSxlQUFJLEVBQUUsQ0FBQztBQUN6QixJQUFJLFNBQVMsR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO0FBRTdCLGdCQUFLLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxHQUFHLElBQUksRUFBRSxFQUFFLFVBQWdCLEdBQUc7O1FBQ2pFLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDOztnQkFDeEIsTUFBTSxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDbEQsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUM5QixDQUFDO1NBQUEsQ0FBQyxDQUFBO0lBQ04sQ0FBQztDQUFBLENBQUMsQ0FBQTtBQUVGLGVBQUksQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEdBQUcsSUFBSSxFQUFFLEVBQUU7O1FBQ2hELE1BQU0sT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUVyQyxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBR0gsZUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsR0FBRyxJQUFJLEVBQUUsRUFBRTs7UUFDN0MsTUFBTSxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRW5DLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxHQUFHLElBQUksRUFBRSxFQUFFOztRQUM5QyxNQUFNLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFdEMsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUdILGVBQUksQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEdBQUcsSUFBSSxFQUFFLEVBQUU7O1FBQ2hELE1BQU0sU0FBUyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUV2QyxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsR0FBRyxJQUFJLEVBQUUsRUFBRTs7UUFDNUMsTUFBTSxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRW5DLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFHSCxlQUFJLENBQUUsb0JBQW9CLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxHQUFHLElBQUksRUFBRSxFQUFFOztRQUNoRCxNQUFNLFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFdkMsQ0FBQztDQUFBLENBQUMsQ0FBQyJ9