import {test,expect} from '@playwright/test';

test('dialogs-alert', async ({page})=>{

    //open url
    await page.goto('https://practice.expandtesting.com/js-dialogs');

    const jsAlert = await page.getByRole('button', { name: 'Js Alert' });

    //we must register the dialog handler before we click on the button
    page.once('dialog',async (dialog)=>{

        //checking the type of dialog alert/confirm/prompt
        await expect(dialog.type()).toBe('alert');

        //read the alert message displayed
        let message = await dialog.message();
        console.log(message);

        //click OK on alert
        await dialog.accept();
    })

    //clicking the button to open alert
    await jsAlert.click();

    //verify the alert was handled successfully
    await expect(page.locator('#dialog-response')).toHaveText('OK');


    await page.waitForTimeout(3000);
})


test('dialogs-confirm', async ({page})=>{

    //open url
    await page.goto('https://practice.expandtesting.com/js-dialogs');

    const jsConfirm = await page.getByRole('button', { name: 'Js Confirm' });

    //we must register the dialog handler before we click on the button
    page.once('dialog',async (dialog)=>{

        //checking the type of dialog alert/confirm/prompt
        await expect(dialog.type()).toBe('confirm');

        //read the alert message displayed
        let message = await dialog.message();
        console.log(message);

        //click OK on alert
        // await dialog.accept();
        await dialog.dismiss();
    })

    //clicking the button to open alert
    await jsConfirm.click();

    //verify the alert was handled successfully
    await expect(page.locator('#dialog-response')).toHaveText('Cancel');


    await page.waitForTimeout(3000);
})


test('dialogs-prompt', async ({page})=>{

    //open url
    await page.goto('https://practice.expandtesting.com/js-dialogs');

    const jsPrompt = await page.getByRole('button', { name: 'Js Prompt' });

    //we must register the dialog handler before we click on the button
    page.once('dialog',async (dialog)=>{

        //checking the type of dialog alert/confirm/prompt
        await expect(dialog.type()).toBe('prompt');

        //read the alert message displayed
        let message = await dialog.message();
        console.log(message);

        //click OK on alert
        await dialog.accept('playwright with javascript');
        // await dialog.dismiss();
    })

    //clicking the button to open alert
    await jsPrompt.click();

    //verify the alert was handled successfully
    await expect(page.locator('#dialog-response')).toHaveText('playwright with javascript');


    await page.waitForTimeout(3000);
})
