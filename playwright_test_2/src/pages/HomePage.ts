import { Page } from 'playwright';
  export class HomePage {
      readonly page: Page;
      readonly resize: any;
      constructor(page: Page, isMobile: boolean) {
        this.page = page;
        this.resize = isMobile? false: page.setViewportSize({ width: 1920, height: 1080 });
        }

      async goToHome() {
        await this.page.goto('');
        }

      async getBusinessLogo() {
        return this.page.isVisible('//img[@class="logoDft sel-dafiti-logo"]');
        }

      async goToLogIn() {
        await this.page.click('//span[@class="text"]');
        }

      async getLoginLabel() {
        return this.page.textContent('//h2[@class="mbm titleLogin brb"]');
        }

      async mouseClickToCart() {
        await this.page.click('//span[@class="icon icon-cart"]');
        }
  
      async checkCartIsVoid() {
        return this.page.textContent('//p[@class="cartTitleEmpty mbm"]');
        }

      async goToSearchBar() {
        await this.page.click('//input[@id="searchInput"]');
        }
  
      async getSearchBarLabel() {
        return this.page.textContent('//div[@class="top-search-title"]');
        }

      async goToHelp() {
        await this.page.click('//ul[@class="rfloat"]/li[1]');
        await this.page.click('//div[@id="popup"]/span');
        }

      async getHelpabel() {
        return this.page.textContent('//h4[@class="nur-dk"]');
        }
      
  }