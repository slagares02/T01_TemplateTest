import { test, expect,} from '@playwright/test';
  import { RequestedPage } from '../src/pages/RequestedPage';

  test.describe('Go to reqrest dashboard page', () => {

    test.beforeEach(async ({ page }) => {
      const homePage = new RequestedPage(page)
      await homePage.goToHome();
    });
    
    test(`Given / When / Then`, async ({ page }) => {
      const reqrestPage = new RequestedPage(page);
      reqrestPage.verticalScroll(100);
      reqrestPage.goToButton();
      expect(await reqrestPage.getText()).toEqual("Support"); 
    });
  })




