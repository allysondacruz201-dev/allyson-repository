import { test, expect } from '@playwright/test';

test.describe('Categorias', () => {

  test('Create Category', async ({ page }) => {

    await page.goto('http://localhost:5173/categorias');
    await page.getByPlaceholder('Nome').fill('Alimentação');
    await page.getByLabel('Finalidade').selectOption('Despesa');
    await page.getByRole('button', { name: 'Salvar' }).click();
    await expect(page.getByText('Alimentação')).toBeVisible();

  });

  test('Validate error message', async ({ page }) => {

    await page.goto('http://localhost:5173/categorias');
    await page.getByRole('button', { name: 'Salvar' }).click();
    await expect(page.getByText('Erro ao salvar categoria')).toBeVisible();

  });

});