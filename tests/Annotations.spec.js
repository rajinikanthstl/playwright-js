import {test,expect} from '@playwright/test';

/*
test.skip() -> marks the test as irrelevant. Playwright does not run such a test. Use this annotation when the test is not 
            applicable in some configuration.
test.fail() -> marks the test as failing. Playwright will run this test and ensure it does indeed fail. If the test does 
            not fail, Playwright will complain.
test.fixme() -> marks the test as failing. Playwright will not run this test, as opposed to the fail annotation. Use fixme 
             when running the test is slow or crashes.
test.slow() -> marks the test as slow and triples the test timeout.
test.only() -> You can focus some tests. When there are focused tests, only these tests run.
*/

//runs only Test-1
// test.only('test-1', ()=>{
//     console.log('This is Test-1');
// })

test('test-1', ()=>{
    console.log('This is Test-1');
})

//skips the test-2
test.skip('test-2', ()=>{
    console.log('This is Test-2');
})

//this test will be reported as passed
test.fail('test-3', ()=>{
    console.log('This is Test-3');
    expect(10).toBe(20);
})

//this test will be skiped
test.fixme('test-4', ()=>{
    console.log('This is Test-4');
})


test('test-5', ()=>{
    test.slow(); //triples timeout of test
    console.log('This is Test-5');
})