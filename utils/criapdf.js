const imgToPDF = require('image-to-pdf')
const fs = require('fs');
import { test } from '@playwright/test';
const pages = [];


async function takescreenshot(page) {
  try {
    console.log("Capturando Tela..");
    pages.push(await page.screenshot({ encoding: "base64" }))
  } catch (error) {
    console.log("Erro ao capturar tela: "+error);
  }
}

async function createPDF() {
  try {
    console.log("Gerando PDF..");
    const titulo = test.info().title.replaceAll(' ', '_');
    const d = new Date();
    const data = d.toLocaleDateString().replaceAll('/', '');
    const hora = d.toLocaleTimeString().replaceAll(':', '');;
    const path = `evidencia/${titulo}_${data}${hora}.pdf`
    imgToPDF(pages, imgToPDF.sizes.A4).pipe(fs.createWriteStream(path))
    console.log("PDF gerado com sucesso.");
  } catch (error) {
    console.log("Erro ao Gerar PDF: " + error);

  }

}

module.exports = { takescreenshot, createPDF }