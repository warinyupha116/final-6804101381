import { test, expect } from '@playwright/test';

test('IT-01: top-down REAL Login -> browser-level Inventory STUB', {
  annotation: {
    type: 'description',
    description: 'ทดสอบ Login จริงร่วมกับ Inventory Stub ที่จำลองด้วย page.setContent()'
  }
}, async ({ page }) => {

  await test.step('Login ผ่านหน้าเว็บไซต์จริง', async () => {
    await page.goto('/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL(/inventory\.html/);
  });

  await test.step('สร้าง Inventory Stub', async () => {
    await page.setContent(`
      <html>
        <body>
          <h1 id="stub-message">Mock Inventory Ready</h1>
          <ul id="stub-list">
            <li class="stub-item">Mock Backpack</li>
            <li class="stub-item">Mock Bike Light</li>
          </ul>
        </body>
      </html>
    `);
  });

  await test.step('ตรวจสอบผลจาก Stub', async () => {
    await expect(page.locator('#stub-message')).toHaveText('Mock Inventory Ready');
    await expect(page.locator('.stub-item')).toHaveCount(2);
    await expect(page.locator('.stub-item')).toHaveText(['Mock Backpack', 'Mock Bike Light']);
  });

});