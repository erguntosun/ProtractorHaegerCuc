import { ElementFinder, element,by } from "protractor";


export class Home{
    btnService : ElementFinder;
    validation_Service :ElementFinder;

    constructor(){
        this.btnService =element(by.xpath('//*[@id="hauptmenu"]/ul/li[3]/a'))   
        this.validation_Service= element(by.xpath('//h2[.="Services"]'))
    }
}