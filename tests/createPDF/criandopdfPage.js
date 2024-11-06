//colocar o takescreenshot dentro dos pages antes de cada ação
import { takescreenshot } from '../../utils/criapdf';

export class CriaPDF{

    constructor(page){
        this.page = page
    }

    async abrir(){
        console.log('Abrindo navegador')
        await this.page.goto('https://admin-demo.nopcommerce.com/login')
        await takescreenshot(this.page)
    }

    async setEmail(){
        console.log('Setando email')
        await takescreenshot(this.page)
        await this.page.locator('input[name="Email"]').fill('admin@yourstore.com');
    }

    async setSenha(){
        console.log('Setando senha')
        await takescreenshot(this.page)
        await this.page.locator('input[name="Password"]').fill('admin');
    }

    async clickBtnLogin(){
        console.log('Clicando em Login')
        await takescreenshot(this.page)
        await this.page.locator('.button-6').click();
    }
}



