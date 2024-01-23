//Aula 5, usando o Codegen npx playwright codegen google.com
//https://www.youtube.com/watch?v=-F0eCZK_vxE&list=PLhW3qG5bs-L9sJKoT1LC5grGT77sfW0Z8&index=5
const {test,expect} = require('@playwright/test')


test('executar login com sucesso', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.getByText('Products')).toBeVisible();
});

// test('executar login com falha', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/');
//   await page.locator('[data-test="username"]').click();
//   await page.locator('[data-test="username"]').fill('standard_user');
//   await page.locator('[data-test="password"]').click();
//   await page.locator('[data-test="password"]').fill('secret_sauce');
//   await page.locator('[data-test="login-button84"]').click();
//   await expect(page.getByText('Products')).toBeVisible();
// });