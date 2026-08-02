import {test,expect} from '@playwright/test';

test.describe('smoke test suite', ()=>{
    
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





