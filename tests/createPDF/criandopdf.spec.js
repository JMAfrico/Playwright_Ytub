import {test} from '@playwright/test';
import { CriaPDF } from './criandopdfPage';
import { takescreenshot,createPDF } from '../../utils/criapdf';

test("teste 1 screenshot", async ({page}) => {
  await page.goto('https://admin-demo.nopcommerce.com/login')
  await takescreenshot(page); 

  await page.locator('input[name="Email"]').fill('admin@yourstore.com');
  await takescreenshot(page);

  await page.locator('input[name="Password"]').fill('admin');
  await takescreenshot(page);

  await page.locator('text=Log in').click();


});

//npm i image-to-pdf
test("teste 2 screenshot", async ({page}) => {
  const criapdf = new CriaPDF(page);
  await criapdf.abrir();
  await criapdf.setEmail();
  await criapdf.setSenha()
  await criapdf.clickBtnLogin()
});

//dentro do after each chamar o método executa pdf
test.afterEach(async ({}) => {
  await createPDF();
})





