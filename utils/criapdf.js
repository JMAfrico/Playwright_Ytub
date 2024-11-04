const imgToPDF = require('image-to-pdf')
const fs = require('fs');
import {test} from '@playwright/test';
const pages = [];

async function takescreenshot(page) {
  console.log("Capturando Tela..");
  pages.push(await page.screenshot({encoding: "base64"}))
}

async function createPDF() {
  const titulo = test.info().title.replaceAll(' ','_');
  const day = Date.now();
  const path = `evidencia/${titulo}_${day}.pdf`
  imgToPDF(pages, imgToPDF.sizes.A4).pipe(fs.createWriteStream(path))
}

module.exports = { takescreenshot, createPDF }