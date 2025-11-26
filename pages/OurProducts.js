import { test, expect } from '../Fixtures/testFixtures.js';

export class OurProducts {

    constructor(page) {
        this.page = page;
        this.availableOurProducts = page.locator("//span[@class='shop_now roboto-bold ng-binding']");
        this.productProfile = page.locator("//h3[@class='categoryTitle roboto-regular sticky ng-binding']");
        this.priceFilter = page.locator("#accordionPrice");
        this.minPriceSlider = page.locator("//div[@class='noUi-handle noUi-handle-lower']");
        this.sliderTrack = page.locator("//div[@class='noUi-origin noUi-connect']");
        this.maxPriceSlider = page.locator("//div[@class='noUi-handle noUi-handle-upper']");
        this.defaultMinPrice = page.locator("//p[@class='sliderSteps left ng-binding']");
        this.defaultMaxPrice = page.locator("//p[@class='sliderSteps  ng-binding']");
        this.filteredProductsPrice = page.locator("//a[@class='productPrice ng-binding']");
        this.productName = page.locator("//a[@class='productName ng-binding']");
        this.breadCum = page.locator("//a[contains(@class, 'select')]");
        this.compatabilityFilter = page.locator("#accordionAttrib0");
        this.manfacturerFilter = page.locator("#accordionAttrib1");
        this.wierlessTechmologyFilter = page.locator("#accordionAttrib3");
        this.weightFilter = page.locator("#accordionAttrib2");
        this.comptabilityCheckbox = page.locator("//input[@name='compatibility_0']");
        this.manfacturerCheckBox = page.locator('#manufacturer_0');
        this.weightCheckBox = page.locator('#weight_0');
        this.weirlessTechnologyCheckBox = page.locator('#wireless_technology_0');
        this.compatabilityOptionText = page.locator("//label[@for='compatibility_0']");
        this.manfactureOptionText = page.locator("//label[@for='manufacturer_0']");
        this.weightOptionText = page.locator("//label[@for='weight_0']");
        this.wierlessOptionText = page.locator("//label[@for='wireless_technology_0']");
        this.NoResult = page.getByText('No results');
        this.getSelectedCompatability = page.locator("//label[text()='COMPATIBILITY']/following-sibling::label[@class='value ng-binding']");
        this.getSelectedConnector = page.locator("//label[text()='CONNECTOR']/following-sibling::label[@class='value ng-binding']");
        this.getSelectedProductList = page.locator("//a[@class='productName ng-binding']");
        this.selectedProductsBreadcum = page.locator("//a[@class='select  ng-binding']");
        this.selectedProductBreadcum = page.locator("//a[@class='select ng-binding']");





    }

    async getAvailableProduct() {
        const availableProducts = await this.availableOurProducts.elementHandles();
        for (const fetchedProduct of availableProducts) {
            console.log((await fetchedProduct.textContent()).trim());
        };
    };

    async selectProductToShop() {
        await this.availableOurProducts.first().click();
    }

    async userOnSelectedProductPage() {
        this.page.waitForTimeout(7000);
        await this.productProfile.waitFor({ state: 'visible' });
        return await this.productProfile;
    }

    async clickOnPriceFilter() {
        await this.priceFilter.click();
    }

    async setMinPriceforProduct() {

        await this.minPriceSlider.dragTo(this.sliderTrack, {
            targetPosition: { x: 15, y: 0 }
        });


    }
    async setMaxPriceForproduct() {
        await this.maxPriceSlider.dragTo(this.sliderTrack, {
            targetPosition: { x: 15, y: 0 }
        });
    }

    async setMinMaxPriceAndVerify() {
        const defaultMinimumPrice = await this.defaultMinPrice.textContent();
        const DefaultMaximumPrice = await this.defaultMaxPrice.textContent();
        console.log(defaultMinimumPrice, DefaultMaximumPrice);
        await this.page.waitForTimeout(3000);
        await this.setMinPriceforProduct();
        await this.setMaxPriceForproduct();
        const afterApplyMinPrice = await this.defaultMinPrice.textContent();
        const afterApplyFilterMaxPrice = await this.defaultMaxPrice.textContent();
        console.log(afterApplyMinPrice, afterApplyFilterMaxPrice);
        expect(defaultMinimumPrice).not.toBe(afterApplyMinPrice);
        expect(DefaultMaximumPrice).not.toBe(afterApplyFilterMaxPrice);



    }

    async verifyProductFilterOutBetweenSelectedPriceRange() {
        await this.page.waitForTimeout(7000);
        console.log(await this.filteredProductsPrice.allTextContents());
        const filteredProductPrice = await this.filteredProductsPrice.allTextContents();
        const afterApplyMinPrice = await this.defaultMinPrice.textContent();
        const afterApplyFilterMaxPrice = await this.defaultMaxPrice.textContent();
        const remove$MinPrice = Number(afterApplyMinPrice.replace("$", ""));
        const remove$MaxPrice = Number(afterApplyFilterMaxPrice.replace("$", ""));

        for (const filterPrices of filteredProductPrice) {
            const remove$ = Number(filterPrices.replace('$', ""));
            expect(remove$).toBeGreaterThanOrEqual(remove$MinPrice);
            expect(remove$).toBeLessThanOrEqual(remove$MaxPrice);
        }

    }

    async ApplyCompatabilityFilter() {
        await this.compatabilityFilter.click();
        await this.comptabilityCheckbox.check();
        return this.compatabilityOptionText.textContent();
    }
    async ApplyManfactureFilter() {
        await this.manfacturerFilter.click();
        await this.manfacturerCheckBox.check();
        return this.manfactureOptionText.textContent();
    }
    async ApplyWeightFilter() {
        await this.weightFilter.click();
        await this.weightCheckBox.check();
        return this.weightOptionText.textContent();
    }
    async ApplyWierlessFilter() {
        await this.wierlessTechmologyFilter.click();
        await this.weirlessTechnologyCheckBox.check();
        return this.wierlessOptionText.textContent();
    }

    async verifyAppliedFilter() {
        if (await this.NoResult.isVisible()) {
            console.log("No product available for applied filter")
        }
        else {
            await this.productName.nth(0).click();
            return await this.getSelectedCompatability.textContent();

        }
    }
    async verifyReflectedProducts(productName) {
        await this.page.waitForTimeout(7000);
        const allSelectedProducts = await this.getSelectedProductList.elementHandles();
        for (const SelectedProduct of allSelectedProducts) {
            const selectedProductName = (await SelectedProduct.textContent()).trim();
            console.log(selectedProductName);
            expect(selectedProductName.toLowerCase()).toContain(productName.toLowerCase());
        }


    }

 async selectProduct(){
    const selectedProduct= (await this.productName.nth(0).textContent()).trim();
     await this.productName.nth(0).click();
     return selectedProduct;
 }
    async verifyBreadcumForSelectedProducts() {
        const getBreadcumtext= (await this.selectedProductsBreadcum.textContent()).trim();
        return getBreadcumtext;

    }
    async verifyBreadCumForSelectedProduct() {
       const getBreadcumtext = (await this.selectedProductBreadcum.textContent()).trim();
       return  getBreadcumtext;
    }
}
