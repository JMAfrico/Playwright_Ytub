//Aula 7 - Locators
//https://www.youtube.com/watch?v=wmy1Nu3X8l0&list=PLhW3qG5bs-L9sJKoT1LC5grGT77sfW0Z8&index=7
const {test,expect} = require('@playwright/test')

test('executar teste locator', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.pause();

    // Usando o objeto
    await page.click('id=user-name')
    await page.locator('id=user-name').fill('teste');
    await page.locator('[id="user-name"]').fill('teste2');
    await page.pause();

    // Usando Css selector, clica com o botão direito no elemento e copiar o selector
    //#login-button
    await page.locator("#login-button").click();

    // Usando Xpath
    await page.locator("//input[@id='password']").fill('123123')
    await page.pause();

    // Usando texto
    await page.locator("text=Login").click();
    await page.locator(':has-text("Login")').click();
    await page.locator('input:has-text("Login")').click();
    

});