import { test, expect } from '@playwright/test';

test('test input iphone', async ({ page }) => {
  await page.goto('https://opencart.abstracta.us');
  await page.getByPlaceholder('Search').fill('iphone');
  await page.pause();
});

test('test click to macbook', async ({ page }) => {
  await page.goto('https://opencart.abstracta.us');
  await page.getByText('MacBook').click();
  await page.pause();
});

test('ejemplo test', async ({ page }) => {   
  await page.goto('https://opencart.abstracta.us');
  await page.locator('button[onclick="cart.add(\'43\');"]').click();
  await page.pause();
});

test.describe('Ingresa a AIO', () => {

  test('entrar a AIO', async ({ page }) => {
  
    await test.step('ingresa a la pagina', async () => {
    await page.goto('https://aioqa.datint.co/');
    await page.getByPlaceholder('example@datint.co').fill('brayan.sanchez@promoambientaldistrito.com');
    await page.getByPlaceholder('············').fill('1028783485');
    await page.locator('button[type="submit"]').click();
    });

    await test.step('Seleccionar empresa', async () => {

      await page.locator('.v-select').click();
      await page.getByText('Empresa Demo').click();

    });

    await test.step('seleccionar modulo', async () => {

     await page.getByText('Configuración').click();
      await page.pause();

    });

  });
});