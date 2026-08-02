import {test,expect} from '@playwright/test';

//hooks at file level
test.beforeAll(()=>{
    console.log('file level beforeAll');
})

test.beforeEach(()=>{
    console.log('file level beforeEach');
})

test.afterEach(()=>{
    console.log('file level afterEach');
})

test.afterAll(()=>{
    console.log('file level afterAll');
})

test.describe('smoke test suite', ()=>{
    //hooks at group level
    test.beforeAll(()=>{
        console.log('group level beforeAll');
    })

    test.beforeEach(()=>{
        console.log('group level beforeEach');
    })

    test.afterEach(()=>{
        console.log('group level afterEach');
    })

    test.afterAll(()=>{
        console.log('group level afterAll');
    })
    
    test('valid login', ()=>{
        console.log('valid login test');
    })

    test('search valid products', ()=>{
        console.log('search valid products test');
    })

    test('add to cart', ()=>{
        console.log('add to cart test');
    })

    test('place the order', ()=>{
        console.log('placing the order test');
    })
})

test.describe('regression test suite', ()=>{
    
    test('valid login', ()=>{
        console.log('valid login test');
    })

    test('invalid login', ()=>{
        console.log('invalid login test');
    })

    test('forgot password', ()=>{
        console.log('forgot password test');
    })
})


test.describe('sanity test suite', ()=>{
   
    test('search invalid products', ()=>{
        console.log('search invalid products test');
    })

    test('remove product from cart', ()=>{
        console.log('remove products from cart test');
    })

    test('place the order', ()=>{
        console.log('placing the order test');
    })

    test('shipping details', ()=>{
        console.log('shipping details test');
    })
})