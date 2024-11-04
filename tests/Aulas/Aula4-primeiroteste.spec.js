//Aula 4- Criando primeiro teste
//https://www.youtube.com/watch?v=wuWLpsRwB5o&list=PLhW3qG5bs-L9sJKoT1LC5grGT77sfW0Z8&index=4
import {test,expect} from '@playwright/test'


test('Primeiro teste',async ({page}) => {
    await page.goto("https://playwright.dev/docs/intro");
    await expect(page).toHaveTitle('Installation | Playwright')
  })