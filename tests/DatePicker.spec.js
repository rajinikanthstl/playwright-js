import {test,expect} from '@playwright/test';

test('date picker automation - I', async ({page})=>{

    //open url
    await page.goto('https://jqueryui.com/datepicker/',{waitUntil:'domcontentloaded'});

    //required date
    const requiredMonth = 'August';
    const requiredYear = '2028';
    const requiredDay = 3;

    //locating frame
    const dateFrame = await page.frameLocator('.demo-frame');

    //locating datepicker
    const datePicker = await dateFrame.locator('#datepicker');   
    
    //locating month displayed
    const month = await dateFrame.locator('div.ui-datepicker-title>span:first-child');

    //locating year displayed
    const year = await dateFrame.locator('div.ui-datepicker-title>span:last-child');
    // const yearMoth = await dateFrame.locator('div.ui-datepicker-title>span');

    //locating next arrow
    const rightArrow = await dateFrame.locator('a.ui-datepicker-next');

    //click on datepicked
    await datePicker.click();

    //looping through calendar
    while(true){
        let currentMonth = await month.textContent();
        let currentYear = await year.textContent();
        // let currentYearMonth = (await yearMoth.allTextContents()).join(' ');
        console.log(currentMonth,currentYear);
        if(currentMonth===requiredMonth && currentYear==='2029'){
            //clicking on required day in calendar
            await dateFrame.locator('a.ui-state-default').nth(requiredDay-1).click();
            break;
        }
        await rightArrow.click();
    }

    await page.waitForTimeout(3000);
    await page.close();
})

test('date picker automation - II', async ({page})=>{

    //open url
    await page.goto('https://testautomationpractice.blogspot.com/',{waitUntil:'domcontentloaded'});

    //required date
    const requiredMonth = 'Aug';
    const requiredYear = '2028';
    const requiredDay = 3;

    //locating datpicker
    const datePicker = await page.locator('input#txtDate');

    //locating monnth dropdown
    const selectMonth = await page.locator('select[data-handler="selectMonth"]');

    //locating year dropdown
    const selectYear = await page.locator('select[data-handler="selectYear"]');

    //locating previous button
    const previous = await page.locator('a[title="Prev"]');

    //locating next button
    const next = await page.locator('a[title="Next"]');

    //locating days of month
    const days = await page.locator('a.ui-state-default');


   //clicking on datepicker
   await datePicker.click();

   //selecting month in dropdown
   await selectMonth.selectOption({label:requiredMonth});

   //selecting year in dropdown
   await selectYear.selectOption({label:requiredYear});

   //clicking on required day
   await days.nth(requiredDay-1).click();


   await page.waitForTimeout(3000);
   await page.close();
})

