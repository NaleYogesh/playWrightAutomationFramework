import { test as base ,expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import{OurProducts} from '../pages/OurProducts';
import{specialOffer} from '../pages/specialOffer';


const test = base.extend({

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  ourProducts: async({page},use)=>{
    await use(new OurProducts(page));
  },

  specialOffer: async({page},use)=>{
await use(new specialOffer(page));
  }


});




export { test, expect };