import { ElementFinder, element,by } from "protractor";


export class Home{
    btnService : ElementFinder;

    constructor(){
        this.btnService =element(by.xpath('//*[@id="hauptmenu"]/ul/li[3]/a'))
    }
}