import {test,expect} from '@playwright/test';

test.skip('mouse hover action', async ({page})=>{

    //open url
    await page.goto('https://practice.expandtesting.com/hovers');

    //hover over element
    await page.locator('div.figure').first().hover();

    //verifying the visibiliy of text
    await expect(page.locator('text=name: user1')).toBeVisible();

    await page.waitForTimeout(3000);
})

test.skip('right click automation', async ({page})=>{

    //open url
    await page.goto('https://practice.expandtesting.com/context-menu');

    //defining dialog action
    page.on('dialog',async (dialog)=>{

        //printing dialog message
        console.log(dialog.message());

        //verifying the dialog message
        await expect(dialog.message()).toBe('You selected a context menu');

        //accepting the dialog
        await dialog.accept();
    });

    //locating the right click box
    const box = await page.locator('#hot-spot');

    //right click on the box
    await box.click({button:'right'});

    await page.waitForTimeout(4000);
})

test.skip('drag and drop automation', async ({page})=>{

    //open url
    await page.goto('https://practice.expandtesting.com/drag-and-drop');

    //locating draggable elements
    const boxA = await page.locator('#column-a');
    const boxB = await page.locator('#column-b');

    //draging boxA to boxB
    await boxA.dragTo(boxB);

    //verifying text in boxes
    await expect(await page.locator('#column-a>header').textContent()).toBe('B');
    await expect(await page.locator('#column-b>header').textContent()).toBe('A');

    //draging boxB to boxA
    await boxB.dragTo(boxA);
    
    //verifying text in boxes
    await expect(await page.locator('#column-a>header').textContent()).toBe('A');
    await expect(await page.locator('#column-b>header').textContent()).toBe('B');
})

test('double click automation', async ({page})=>{

    //open url
    await page.goto('https://testautomationpractice.blogspot.com/');

    //locating Field1 and Field2 input box
    const Field1 = page.locator('#field1');
    const Field2 = page.locator('#field2');

    //clearing and entering text into Field1
    await Field1.clear();
    await Field1.fill('playwright');

    //doubleclick on button
    await page.locator('text=Copy Text').dblclick();

    //asserting the text from both fields
    await expect(await Field1.inputValue()).toBe(await Field2.inputValue());

    await page.waitForTimeout(3000);

})