import { test, expect } from '@playwright/test';

test.describe('Transações', () => {

  test('No prescriptions for minors', async ({ page }) => {

    await page.goto('http://localhost:5173/transacoes');
    await page.getByLabel('Pessoa').selectOption('Menor');
    await page.getByLabel('Tipo').selectOption('Receita');
    await page.getByLabel('Valor').fill('100');
    await page.getByRole('button', { name: 'Salvar' }).click();
    await expect(page.getByText(/menor de idade/i)).toBeVisible();

  });

  test('Do not allow incompatible category.', async ({ page }) => {

    await page.goto('http://localhost:5173/transacoes');
    await page.getByLabel('Categoria').selectOption('Alimentação');
    await page.getByLabel('Tipo').selectOption('Receita');
    await page.getByLabel('Valor').fill('100');
    await page.getByRole('button', { name: 'Salvar' }).click();
    await expect(page.getByText(/categoria incompatível/i)).toBeVisible();

  });

});