"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
//import * as reporter from "cucumber-html-reporter"
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
        require: ['Features/StepDef.ts',
            'Features/Step_Definitions/StepDef.js',
            'JSFiles/Features/StepDef.js'
        ]
    },
    //onPrepare(){
    //  require('ts-node').register({
    //        project: require('path').join(__dirname,'./tsconfig.json')
    //    });
    //}
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL0NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0Esb0RBQW9EO0FBRXpDLFFBQUEsTUFBTSxHQUFXO0lBQ3hCLGFBQWEsRUFBRSxJQUFJO0lBQ25CLE9BQU8sRUFBRSxtQ0FBbUM7SUFDNUMsU0FBUyxFQUFFLFFBQVE7SUFDbkIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFFL0QsWUFBWSxFQUFFO1FBQ1YsV0FBVyxFQUFFLFFBQVE7S0FDeEI7SUFFRCxLQUFLLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztJQUVwQyxZQUFZLEVBQUU7UUFDVixPQUFPLEVBQUMsQ0FBRSxxQkFBcUI7WUFDL0Isc0NBQXNDO1lBQ3RDLDZCQUE2QjtTQUNoQztLQUVBO0lBQ0QsY0FBYztJQUNaLGlDQUFpQztJQUNuQyxvRUFBb0U7SUFDcEUsU0FBUztJQUNULEdBQUc7Q0FDTixDQUFDIn0=