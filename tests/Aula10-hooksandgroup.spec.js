import { test, expect } from '@playwright/test'

/*  Hooks servem para definir o que vai ser executando antes e depois de todos e de cada testes
beforeAll => executado antes de todos os testes no arquivo 
beforeEach => executado antes de cada teste no arquivo(Ex:Login, basico para acessar o site a cada execucao)
afterAll => executa após todos os testes no arquivo(Gerar um arquivo de texto com os dados)
afterEach => é executado após cada teste no arquivo(Ex:Fechar navegador)
test.describe é um agrupador de testes, posso colocar vários testes ali dentro e
cada método só vai ser executado ali dentro, before e after tambem
*/

test.describe('Realizando login sc', () => {
   test.beforeAll(async ({ }) => {
      console.log('Teste iniciadoo...')
   })
   test.beforeEach(async ({ page }) => {
      await page.goto('https://demo.applitools.com/')
      await page.locator('[placeholder="Enter your username"]').fill('Raghav');
      await page.locator('[placeholder="Enter your password"]').fill('1234');
      await page.locator('text=Sign in').click();
      await page.locator('text=ACME').isVisible();
   })
   test.afterEach(async ({ page }) => {
      console.log('Testes finalizados...')
      await page.close();
   })

   // test.afterAll(async ({ page }) => {
   // After all não está funcionando aqui, por enquanto estou usando after each
   // })

   test('hook test 1', async ({ page }) => {
      await page.getByRole('link', { name: '  Credit cards' }).click();
   })
})

test.describe('Realizando login com erro', () => {

   test.beforeAll(async ({ }) => {
      console.log('Teste iniciadoo 2...')
   })

   test.beforeEach(async ({ page }) => {
      await page.goto('https://www.saucedemo.com/');
      await page.locator('[data-test="username"]').click();
      await page.locator('[data-test="username"]').fill('standard_user');
      await page.locator('[data-test="password"]').click();
      await page.locator('[data-test="password"]').fill('secret_sa8');
      await page.locator('[data-test="login-button"]').click();

   })

   test.afterEach(async ({ page }) => {
      console.log('Testes finalizados...')
      await page.close();
   })
   
   test('hook test 1', async ({ page }) => {
      await page.locator('[data-test="error"]').isVisible();
   })
})
