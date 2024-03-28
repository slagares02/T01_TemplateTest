import { test, expect,} from '@playwright/test';
  import { RqresPage } from '../src/pages/RqresPage';

  test.describe('Cuesnta ahorro', () => {

    test.beforeEach(async ({ page }) => {
      const homePage = new RqresPage(page)
      await homePage.goToHome();
    });
    
    test(`Given / When / Then`, async ({ page }) => {
      const utestPage = new RqresPage(page);
      utestPage.goToButton();
      expect(await utestPage.getTextStep1()).toEqual("Why uTest?"); 
    });
  })




