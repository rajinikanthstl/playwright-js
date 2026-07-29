import {test,expect} from '@playwright/test';

test('frames', async ({page})=>{

    //open url
    await page.goto("https://app.thetestingacademy.com/playwright/frames/");

    //locate all frames in a page
    const allFrames = await page.frames();
    console.log('number of frames:',allFrames.length); //count of frames

    //1.using frameLocator -> modern and suggested
    // let pageFrame = page.frameLocator('#frame-one'); //frameLocator needs css or xpath

    //2.using frame -> legacy
    let pageFrame = await page.frame('vehicle-form');  //frame needs attribute/name/url

    //filling the form inside frame
    let vehicleName = pageFrame.locator('input#RESULT_TextField-1');
    await vehicleName.fill('test vehicle');

    let ownerName = pageFrame.locator('input#RESULT_TextField-2');
    await ownerName.fill('Rajesh');

    let regNumber = pageFrame.locator('input#RESULT_TextField-3');
    await regNumber.fill('MH-12-AB-1234');

    let carType = pageFrame.locator('#RESULT_RadioButton-1');
    await carType.selectOption('Electric');

    let year = pageFrame.locator('#RESULT_TextField-4');
    await year.fill('2025');

    pageFrame.locator('#RESULT_TextArea-1').fill('bought this vehicle for testing...');

    //submiting the form
    await pageFrame.locator('#vehicle-submit').click();

    //printing form content
    let vehicleOutput = pageFrame.locator('#vehicle-output');
    console.log(await vehicleOutput.textContent());

    await page.waitForTimeout(3000);
})