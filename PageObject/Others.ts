import { ElementFinder, element,by } from "protractor";

export class Others{

    btnTeam : ElementFinder;
    btnKultur : ElementFinder;
    btnProject: ElementFinder;
    btnJob: ElementFinder;
    btncontact: ElementFinder;
  

    constructor()
    {
        this.btnTeam = element(by.xpath('//*[@id="hauptmenu"]/ul/li[4]/a'))
        this.btnKultur = element(by.xpath('//*[@id="hauptmenu"]/ul/li[5]/a'))
        this.btnProject =element(by.xpath('//*[@id="hauptmenu"]/ul/li[6]/a'))
        this.btnJob =element(by.xpath('//*[@id="hauptmenu"]/ul/li[7]/a'))
        this.btncontact =element(by.xpath('//a[.="Kontakt"]'))
        
    }



}