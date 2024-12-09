import { Page } from 'playwright';
  export class SortPage {
      readonly page: Page;

      constructor(page: Page) {
          this.page = page;
        }

      async moveMouseOverFamale() {
        var position = this.page.locator('//ul[@class="navUl"]/li[2]');
        var xy = (await position.boundingBox())!;
        await this.page.mouse.move(xy.x + xy.width / 2, xy.y + xy.height);
        }

      async clickWatchTag() {
        await this.page.click('//ul[@class="navUl"]/li[2]/div/div[4]/ul/li[2]/a');
      }

      async countListOfWatch() {
        var items = this.page.locator('//h3[contains(text(),"Reloj")]/ancestor::div[1]');
        return items.count();
      }
  }