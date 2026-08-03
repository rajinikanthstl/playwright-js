import {test,expect} from '@playwright/test';

test('test-1 @smoke',()=>{
    console.log('Test Case - 1');
})

test('test-2 @smoke',()=>{
    console.log('Test Case - 2');
})

test('test-3 @smoke@regression',()=>{
    console.log('Test Case - 3');
})

test('test-4 @regression@sanity',()=>{
    console.log('Test Case - 4');
})

test('test-5 @sanity',()=>{
    console.log('Test Case - 5');
})

test('test-6 @sanity',()=>{
    console.log('Test Case - 6');
})

/*
AND -> npx playwright test Tagging.spec.js --project=chromium --workers=1 --grep=sanity --grep "(?=.*@smoke)(?=.*@regression)"
OR -> npx playwright test Tagging.spec.js --project=chromium --workers=1 --grep "@smoke|@regression"
NOT -> npx playwright test Tagging.spec.js --project=chromium --workers=1 --grep=sanity --grep-invert=regression
*/