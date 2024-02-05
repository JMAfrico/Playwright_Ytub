//Aula 11, anotations e tags
//https://www.youtube.com/watch?v=9dSRZ-oswlM&list=PLhW3qG5bs-L9sJKoT1LC5grGT77sfW0Z8&index=12
import {test,expect} from '@playwright/test';

//test.skip - Pula um teste
test.skip('Pular teste', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
});

//test.fail() - Marca o teste como falha
test('Teste marcado com falha', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  test.fail();
});

//test.fixme - Marca o teste como correção, esse teste vai ser ignorado
test.fixme('Teste marcado para correcao', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  test.fail();
});

//test.slow() - Esse teste ira triplicar o timeout
test('executar login slow', async ({ page }) => {
  test.slow();
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
});

//test.only - Somenete esse teste ira ser executado nessa classe
test('executar somente esse', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
});

//teste com condicional. Pula o test caso seja executado no firefox
test('skip this test', async ({ page, browserName }) => {
  test.skip(browserName === 'firefox', 'Still working on it');
});


//teste separado por grupos
test.describe('Teste do grupo', () => {
  test('Teste do grupo 1', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  })
  test('Teste do grupo 2', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  })
  test('Teste do grupo 3', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  })
})


//// Com Tags
// No titulo adicionar a tag (@fast) e no terminal usar 'npx playwright test --grep @fast'
//Não executar os testes com uma determinada tag, no terminal usar 'npx playwright test --grep-invert @fast'
test('executar somente esses 1 @fast', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
});

test('executar somente esses 2 @fast', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
});

test('executar somente esses 3 @fast', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
});