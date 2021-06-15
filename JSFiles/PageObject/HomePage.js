"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
const protractor_1 = require("protractor");
class Home {
    constructor() {
        this.btnService = protractor_1.element(protractor_1.by.xpath('//*[@id="hauptmenu"]/ul/li[3]/a'));
        this.validation_Service = protractor_1.element(protractor_1.by.xpath('//h2[.="Services"]'));
    }
}
exports.Home = Home;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlT2JqZWN0L0hvbWVQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUF1RDtBQUd2RCxNQUFhLElBQUk7SUFJYjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQTtRQUNyRSxJQUFJLENBQUMsa0JBQWtCLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQTtJQUNwRSxDQUFDO0NBQ0o7QUFSRCxvQkFRQyJ9