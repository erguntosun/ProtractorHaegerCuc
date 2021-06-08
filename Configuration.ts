import { Config, Capabilities } from "protractor";
//import * as reporter from "cucumber-html-reporter"

export let config: Config = {
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    Capabilities: {
        browserName: 'chrome'
    },

    specs: ['../Features/Test1.feature'],
    
    cucumberOpts: {
        require: 'Features/Step_Definitions/StepDef.js',
        
    }
};