import { test, expect } from '@playwright/test';

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' });

  await page.locator('input[name="restaurantName"]').fill('Pizza Shop')
  await page.locator('input[name="managerName"]').fill('John Doe')
  await page.locator('input[name="email"]').fill('johndoe@example.com')
  await page.locator('input[name="phone"]').fill('12345678901')

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Restaurante cadastrado com sucesso')

  expect(toast).toBeVisible()
});

test('sign up with error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' });

  await page.locator('input[name="restaurantName"]').fill('Invalid name')
  await page.locator('input[name="managerName"]').fill('John Doe')
  await page.locator('input[name="email"]').fill('johndoe@example.com')
  await page.locator('input[name="phone"]').fill('12345678901')

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Erro ao cadastrar restaurante')

  expect(toast).toBeVisible()
});

test('navigate to new restaurante page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' });

  await page.getByRole('link', { name: 'Fazer login' }).click()

  expect(page.url()).toContain('/sign-in')
});
