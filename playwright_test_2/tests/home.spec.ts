import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/HomePage';

test.describe('Go to home page', () => {

  test.beforeEach(async ({ page, isMobile }) => {
    const homePage = new HomePage(page, isMobile)
    await homePage.goToHome();
    
  });
  
  test(`Given user want to enter to Dafiti's home page
    When user browser to https://www.dafiti.com.co
    Then user can see the store logo`, async ({ page, isMobile }) => {
    const homeObjectPage = new HomePage(page, isMobile);
    expect(await homeObjectPage.getBusinessLogo()).toBeTruthy;
  });

  test(`Given user is on home page
    When user click on "ENTRAR"
    Then user sees "CLIENTES REGISTRADOS" label `, async ({ page, isMobile }) => {
    const homeObjectPage = new HomePage(page, isMobile);
    await homeObjectPage.goToLogIn();
    expect(await homeObjectPage.getLoginLabel()).toEqual("Clientes registrados");
  });

  test(`Given user is on home page
    When user check the cart
    Then user can see the message "Tu carro está vacío..."`, async ({ page, isMobile }) => {
    const cartObjectPage = new HomePage(page, isMobile);
    await cartObjectPage.mouseClickToCart();
    await cartObjectPage.page.waitForTimeout(100); //wait for load the cart
    expect(await cartObjectPage.checkCartIsVoid()).toEqual("Tu carro está vacío...");
  });

  test(`Given user is on home page
    When user click on search bar
    Then user sees "Más buscados" label `, async ({ page, isMobile }) => {
    const homeObjectPage = new HomePage(page, isMobile);
    await homeObjectPage.goToSearchBar();
    expect(await homeObjectPage.getSearchBarLabel()).toEqual("Más buscados");
  });

  test(`Given user is on home page
    When user click on "Centro de ayuda"
    Then user sees "Centro de ayuda" label `, async ({ page, isMobile }) => {
    const homeObjectPage = new HomePage(page, isMobile);
    await homeObjectPage.goToHelp();
    expect(await homeObjectPage.getHelpabel()).toEqual("Centro de ayuda");
  });
});

