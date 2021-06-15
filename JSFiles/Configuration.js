"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const reporter = __importStar(require("cucumber-html-reporter"));
exports.config = {
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
        require: [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL0NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGlFQUFrRDtBQUV2QyxRQUFBLE1BQU0sR0FBVztJQUN4QixhQUFhLEVBQUUsSUFBSTtJQUNuQixPQUFPLEVBQUUsbUNBQW1DO0lBQzVDLFNBQVMsRUFBRSxRQUFRO0lBQ25CLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBRS9ELFlBQVksRUFBRTtRQUNWLFdBQVcsRUFBRSxRQUFRO0tBQ3hCO0lBRUQsS0FBSyxFQUFFLENBQUMsMkJBQTJCLENBQUM7SUFFcEMsWUFBWSxFQUFFO1FBQ1YsTUFBTSxFQUFFLDZCQUE2QjtRQUNyQyxVQUFVLEVBQUUsR0FBRyxFQUFFO1lBQ2IsbURBQW1EO1lBRW5ELElBQUksT0FBTyxHQUFHO2dCQUNWLEtBQUssRUFBRSxXQUFXO2dCQUNsQixRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxNQUFNLEVBQUUsd0JBQXdCO2dCQUNoQyxzQkFBc0IsRUFBRSxJQUFJO2dCQUM1QixpQkFBaUIsRUFBRSxJQUFJO2dCQUN2QixZQUFZLEVBQUUsSUFBSTtnQkFDbEIsUUFBUSxFQUFFO29CQUNOLGFBQWEsRUFBRSxPQUFPO29CQUN0QixrQkFBa0IsRUFBRSxTQUFTO29CQUM3QixTQUFTLEVBQUUscUJBQXFCO29CQUNoQyxVQUFVLEVBQUUsWUFBWTtvQkFDeEIsVUFBVSxFQUFFLFdBQVc7b0JBQ3ZCLFVBQVUsRUFBRSxRQUFRO2lCQUN2QjthQUNKLENBQUM7WUFFRixRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRS9CLENBQUM7UUFDQSxPQUFPLEVBQUM7WUFDSix3QkFBd0I7WUFDN0IsMENBQTBDO1lBQzFDLGlDQUFpQztZQUNqQyxxQkFBcUI7U0FDeEI7S0FFQTtJQUNELE9BQU8sRUFBRSxDQUFDO1lBQ04sT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsbURBQW1ELENBQUM7WUFDN0UsT0FBTyxFQUFFO2dCQUNMLDJCQUEyQixFQUFFLElBQUk7Z0JBQ2pDLDRCQUE0QixFQUFFLElBQUk7Z0JBQ2xDLG1CQUFtQixFQUFFLElBQUk7Z0JBQ3pCLFNBQVMsRUFBRSxnQkFBZ0I7Z0JBQzNCLFVBQVUsRUFBRSw0Q0FBNEM7Z0JBQ3hELFVBQVUsRUFBRTtvQkFDUixLQUFLLEVBQUUsbUJBQW1CO29CQUMxQixJQUFJLEVBQUU7d0JBQ0YsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxzQkFBc0IsRUFBRTt3QkFDbkQsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUU7cUJBQ2hEO2lCQUNKO2FBQ0o7U0FFSixDQUFDO0lBQ04sUUFBUTtJQUNSLDBCQUEwQjtJQUMxQixrQ0FBa0M7SUFDbEMsaUNBQWlDO0lBQ2pDLHVEQUF1RDtJQUV2RCxvQ0FBb0M7SUFDcEMsNkJBQTZCO0lBRTdCLCtEQUErRDtJQUMvRCxrQkFBa0I7SUFDbEIsUUFBUTtDQUNQLENBQUMifQ==