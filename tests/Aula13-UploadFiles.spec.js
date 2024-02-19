//Aula 13 upload files
//https://www.youtube.com/watch?v=e8jfjV71E6Q&list=PL699Xf-_ilW7EyC6lMuU4jelKemmS6KgD&index=7
import {test,expect} from '@playwright/test'

test('upload', async ({ page }) => {

    const filepath = '../video/video.webm';

    await page.goto('https://www.sendgb.com');
    await page.setInputFiles("input[name='qqfile']", filepath);

 })
 
 