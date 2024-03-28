import { Page } from 'playwright';
  export class RqresPage {
      readonly page: Page;

      constructor(page: Page) {
          this.page = page;
      }

      async goToHome() {
          await this.page.goto('');
      }

      async goToButton() {
          await this.page.click("//div[@class='unauthenticated-container']/div/unauthenticated-header/div/div[3]/ul[1]/li[1]/unauthenticated-header-nav-item/a/span");
      }

      async getTextStep1() {
          return this.page.textContent("//div[@class='why-utest']/header/h1");
      }
  }