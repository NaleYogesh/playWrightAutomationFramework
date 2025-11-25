import { test, expect } from '../Fixtures/testFixtures.js';

export class popularItem {
    constructor(page) {
        this.page = page;
        this.popularItem = page.locator("//a[text()='POPULAR ITEMS']");
        this.popularItemSection = page.locator("//h3[text()='POPULAR ITEMS']");
        this.productAvailableInPopularItem = page.locator("//div[@ng-repeat='product in popularProducts']");
        this.veiwDeatilButton = page.getByText("View Details");
    }

    async clickOnPopularItem() {
        await this.popularItem.click();

    }

    verifyPopularItemSection() {
        return this.popularItemSection;
    }

    async productsAvailableInPopularItemSection() {
        return this.productAvailableInPopularItem.elementHandles();
    }

    async clickOnPopularItem() {
        const availablePopularElement = await this.productsAvailableInPopularItemSection();
        if (availablePopularElement.length === 0) {
            return false;
        }
        else {
            await this.veiwDeatilButton.click();
            return true;
        }
    }
}