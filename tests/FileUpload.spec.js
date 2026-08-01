import {test,expect} from '@playwright/test';

test('File upload', async ({page})=>{

    //open url
    await page.goto('https://practice.expandtesting.com/upload');

    //locating fileinput element
    const fileUploader = await page.locator('#fileInput');

    //locating sumit button
    const submitButton = await page.locator('@fileSubmit');

    //capturing the success message
    const result = await page.locator('//li[@class="breadcrumb-item active"]');

    //uploading file
    await page.locator('#fileInput').setInputFiles('./uploads/sample.txt');

    //clicking on submit
    await page.locator('#fileSubmit').click();

    //printing the success message on console
    console.log('reult message: ',await result.textContent());

    //verifying success message to contain 'Uploaded'
    expect(await result.textContent()).toContain('Uploaded');

    await page.waitForTimeout(3000);
})

test.only('Multiple Files Upload', async ({page})=>{

    //open url
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    //locating file upload button
    const uploadButton = page.locator('#filesToUpload');

    //locating the list of uploaded files
    const fileUploads = page.locator('#fileList');

    //uploading multiple files in array
    await uploadButton.setInputFiles(['./uploads/sample.txt','./uploads/image.png']);

    //verifying the uploaded files
    await expect(await fileUploads.textContent()).toContain('sample.txt');
    await expect(await fileUploads.textContent()).toContain('image.png');

    //remove uploaded files
    await uploadButton.setInputFiles([]); //passing an empty array

    //verifying files list
    await expect(await fileUploads.textContent()).toContain('No Files Selected');

    await page.waitForTimeout(3000);    
})