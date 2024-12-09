import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/HomePage';
import { SortPage } from '../src/pages/SortPage';


test.describe('User want to sort a product', () => {

  test.beforeEach(async ({ page, isMobile }) => {
    const homeObjectPage = new HomePage(page, isMobile)
    await homeObjectPage.goToHome();
  });
  
  test(`Given user want to sort a product 
    When user select "female" and "watch"
    Then user can see the list of watches`, async ({ page }) => {
    const sortObjectPage = new SortPage(page);
    await sortObjectPage.moveMouseOverFamale();
    await sortObjectPage.clickWatchTag();
    await sortObjectPage.page.waitForTimeout(1000); //Page has a delay to load the list of products
    expect(await sortObjectPage.countListOfWatch()).toEqual(47);
  });  
});

