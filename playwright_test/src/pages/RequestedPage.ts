import { Page } from 'playwright';
  export class RequestedPage {
      readonly page: Page;

      constructor(page: Page) {
          this.page = page;
      }

      async goToHome() {
          await this.page.goto('');
      }

      async verticalScroll(vertical: number) {
        await this.page.mouse.wheel(0,vertical);
    }
      async goToButton() {
          await this.page.click("//div[@class='t-center']/button", {delay: 1000});
      }

      async getText() {
          return this.page.textContent("//h2[@id='support-heading']");
      }
  }