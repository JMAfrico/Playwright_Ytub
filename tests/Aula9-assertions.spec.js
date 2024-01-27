import {test,expect} from '@playwright/test'

test('Assertions demo', async({page}) => {
    await page.goto('https://kitchen.applitools.com/')
    await page.pause()

    //ASSERTIONS
    //verifica se existe um unico elemento com esse texto
    await expect(page.locator('text=The Kitchen')).toHaveCount(1);

    //verifica se um elemento está na tela e executa a ação
    if(await page.$('text=The Kitchen')){
        await page.locator('text=The Kitchen').click();
    }
    
    //verifica se o elemento está visivel ou oculto
    // com expect soft se o teste falhar, não para a aplicação
    await expect(page.locator('text=The Kitchen')).toBeVisible();
    //await expect.soft(page.locator('text=The Kitchen')).toBeHidden();

    //verifica se o elemento está habilitado ou desabilitado
    await expect(page.locator('text=The Kitchen')).toBeEnabled();
    //await expect.soft(page.locator('text=The Kitchen')).toBeDisabled();

    //verifica se o elemento contem o texto
    await expect(page.locator("//h1[@class='chakra-heading css-dpmy2a']")).toHaveText('The Kitchen');
    await expect(page.locator("//h1[@class='chakra-heading css-dpmy2a']")).toContainText('Kitchen');
    await expect(page.locator("//h1[@class='chakra-heading css-dpmy2a']")).not.toHaveText('Ola');

    //verifica se o elemento tem a classe chakra-heading css-dpmy2a ou tem uma parte da classe
    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class','chakra-heading css-dpmy2a')
    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class',/.*css-dpmy2a/);
    await expect(page.locator('text=The Kitchen')).toHaveClass(/.*css-dpmy2a/);

    //OUTRAS ASSERTIONS
    await expect(page).toHaveURL('https://kitchen.applitools.com/');
    await expect(page).toHaveTitle('The Kitchen');
    await expect(page).toHaveTitle(/.*Kitchen/);

    //VALIDAÇÃO VISUAL COM SCREENSHOT - FAZ UMA COMPARAÇÃO DE SCREENSHOTS E VALIDA 
    //valida se tem screenshot , vai dar false, porque nao tem
    await page.pause();
    await expect(page).toHaveScreenshot();




});