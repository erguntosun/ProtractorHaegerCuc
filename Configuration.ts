import { Config, Capabilities } from "protractor";
//import * as reporter from "cucumber-html-reporter"

export let config: Config = {
    directConnect: true,
    baseUrl: "https://www.haeger-consulting.de/",
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    Capabilities: {
        browserName: 'chrome'
    },

    specs: ['../Features/Test1.feature'],
    
    cucumberOpts: {
         require:[ 
             //'Features/StepDef.ts',
        // 'Features/Step_Definitions/StepDef.js',
        // 'JSFiles/Features/StepDef.js',
        'Features/StepDef.js',
    ]
   
    },
    //onPrepare(){
      //  require('ts-node').register({
    //        project: require('path').join(__dirname,'./tsconfig.json')
    //    });
    //}
};