import { Config, Capabilities } from "protractor";
import * as reporter from "cucumber-html-reporter"

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
        format: 'json:./cucumberreports.json',
        onComplete: () => {
            //var reporter = require('cucumber-html-reporter');

            var options = {
                theme: 'bootstrap',
                jsonFile: './cucumberreports.json',
                output: './cucumber_report.html',
                reportSuiteAsScenarios: true,
                scenarioTimestamp: true,
                launchReport: true,
                metadata: {
                    "App Version": "0.3.2",
                    "Test Environment": "STAGING",
                    "Browser": "Chrome 85.0.4183.83",
                    "Platform": "Windows 10",
                    "Parallel": "Scenarios",
                    "Executed": "Remote"
                }
            };

            reporter.generate(options);

        },
         require:[ 
             //'Features/StepDef.ts',
        // 'Features/Step_Definitions/StepDef.js',
        // 'JSFiles/Features/StepDef.js',
        'Features/StepDef.js',
    ]
   
    },
    plugins: [{
        package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
        options: {
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true,
            openReportInBrowser: true,
            pageTitle: "Project Report",
            pageFooter: "<div><p>Protractor with cucumber</p></div>",
            customData: {
                title: 'Cucucamber Report',
                data: [
                    { label: 'Project', value: 'Haeger Web page test' },
                    { label: 'Created By', value: 'Ergun Tosun' }
                ]
            }
        },

    }]
//     ,
//     onComplete: () => {
//         // Load chai assertions
//  const chai = require('chai');
//  const chaiAsPromised = require('chai-as-promised');

//  // Load chai-as-promised support
//  chai.use(chaiAsPromised);

//  // Initialise should API (attaches as a property on Object)
//  chai.should();
//     }
};