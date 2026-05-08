import { test, expect } from '@playwright/test';

test('Open Main Page', async ({ page }) => {

  await page.goto('http://localhost:5173/');
  await expect(page).toHaveTitle(/React/i);

});

test('Error when Saving Person', async ({ page }) => {

  await page.goto('http://localhost:5173/');
  await page.getByPlaceholder('Nome').fill('João');
  await page.getByRole('button', { name: 'Salvar' }).click();
  await expect(page.getByText('Error when Saving Person')).toBeVisible();

});

test.describe('Pessoas', () => {

  test('Person Registration', async ({ page }) => {

    await page.goto('http://localhost:5173/');
    await page.getByPlaceholder('Nome').fill('João Teste');
    await page.getByLabel('Data de nascimento').fill('1990-01-01');
    await page.getByRole('button', { name: 'Salvar' }).click();
    await expect(page.getByText('João Teste')).toBeVisible();

  });

  test('Error when Saving Person', async ({ page }) => {

    await page.goto('http://localhost:5173/');
    await page.getByRole('button', { name: 'Salvar' }).click();
    await expect(page.getByText('Error when Saving Person')).toBeVisible();

  });

  test('List Registered People', async ({ page }) => {

    await page.goto('http://localhost:5173/');

    await expect(page.getByText('João Teste')).toBeVisible();

  });

});


