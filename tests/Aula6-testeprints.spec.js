// Aula 6 - Criando snapshots e screenshot, adicionado beforeAll e After all
//https://www.youtube.com/watch?v=Ea4aZB0Zlsw&list=PLhW3qG5bs-L9sJKoT1LC5grGT77sfW0Z8&index=6

const { test, expect } = require('@playwright/test');

let context;
let page;

test.beforeAll(async({browser}) =>{
  context = await browser.newContext();
  await context.tracing.start(
    { 
      snapshots: true, 
      screenshots: true 
    })
    page = await context.newPage();
})

test.afterAll(async()=>{
  await context.tracing.stop(
    {
      path: 'testprint-trace2.zip'
    }
  )
})


test('teste com print e log', async ({}) => {
  // await context.tracing.start(
  //   { 
  //     snapshots: true, 
  //     screenshots: true 
  //   })

  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

  // await context.tracing.stop(
  //   {
  //     path: 'testprint-trace.zip'
  //   }
  // )

});
