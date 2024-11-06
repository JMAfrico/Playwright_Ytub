import { test, expect } from '@playwright/test'
import { parse } from 'csv-parse/sync';

/* A classe tem 3 testes em sites diferente
Executei com 'npx playwright test .\Aula8-Demotest.spec.js --headed'
Usando o pause em cada teste, consegui gravar cada ação
depois só copiei o código e joguei aqui na classe  */

test('Login demo test 1', async ({ page }) => {

   await page.goto('https://demo.applitools.com/')
   //await page.pause()
   await page.locator('[placeholder="Enter your username"]').fill('Raghav');
   await page.locator('[placeholder="Enter your password"]').fill('1234');
   await page.locator('text=Sign in').click();
   await page.locator('text=ACME').isVisible();
   //await page.waitForSelector('text=Sign in', { timeout: 10000 })
   //await expect(page.locator('text=Sign in')).toHaveCount(1)
})

test('Login demo test 2', async ({ page }) => {
   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php')
   //await page.pause()
   await page.getByText('Username : Admin').click();
   await page.getByPlaceholder('Username').click();
   await page.getByPlaceholder('Username').fill('Admin');
   await page.getByPlaceholder('Password').click();
   await page.getByPlaceholder('Password').fill('admin123');
   await page.getByRole('button', { name: 'Login' }).click();
   await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

})

test('Login demo test 3', async ({ page }) => {
   await page.goto('https://admin-demo.nopcommerce.com/login')
   await page.locator('input[name="Email"]').click();
   await page.locator('input[name="Email"]').press('Control+a');
   await page.locator('input[name="Email"]').fill('admin@yourstore.com');
   await page.locator('input[name="Password"]').click();
   await page.locator('input[name="Password"]').press('Control+a');
   await page.locator('input[name="Password"]').fill('admin');
   await page.locator('text=Log in').click();
   await page.locator('#nopSideBarPusher i').click();
   await page.locator('text=Logout').click();
   await page.waitForURL('https://admin-demo.nopcommerce.com/login')
   await page.close();
})

/*fs.readFile("input.csv", "utf-8", (err, data) => {
   if (err) console.log(err);
   else console.log(data);
});*/

test('Login demo test 4', async ({ page }) => {

   //Lê os dados do arquivo input.csv e coloca esses no log
   //const dados = fs.readFileSync('./input.csv'); 

   //Lê os dados do arquivo input.csv e coloca esses no log
   //const dados = load('input.csv')
   console.log("AQQ", dados)

   await page.goto('https://demo.applitools.com/')
   //await page.pause()
   await page.locator('[placeholder="Enter your username"]').fill('dados[0]');
   await page.locator('[placeholder="Enter your password"]').fill("dados[1]");
   //save(a);
   await page.locator('text=Sign in').click();
   await page.locator('text=ACME').isVisible();
})