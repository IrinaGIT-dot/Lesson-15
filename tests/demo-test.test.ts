import {expect, test} from "@playwright/test";

test.beforeEach(async ({ page }) => {
    const path = require('path');
    const filePath = `file://${path.resolve('dummy-demo.html')}`;
    await page.goto(filePath);

    //const filePath = path.resolve('dummy-order.html');
    //await page.goto(`${baseURL}/${filePath}`);
})

test('Button Place your order is disabled', async ({ page }) => {
    await expect(page.getByTestId("submit-order")).toBeDisabled()
    }
);

test('Button Place your order is enabled', async ({ page }) => {
    const userNameField = page.getByTestId("username")
    const userEmailField = page.getByTestId("email")
    await userEmailField.fill("er@er.ty")
    await userNameField.fill("test")
    await expect(page.getByTestId("submit-order")).toBeEnabled()
    }
)