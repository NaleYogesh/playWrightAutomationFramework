import { test as base ,expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import{OurProducts} from '../pages/OurProducts';
import{specialOffer} from '../pages/specialOffer';
import{popularItem} from '../pages/popularItem';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { parse } from 'csv-parse/sync';


  const test = base.extend({

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  ourProducts: async({page},use)=>{
    await use(new OurProducts(page));
  },

  specialOffer: async({page},use)=>{
await use(new specialOffer(page));
  },

  popularItem: async({page},use)=>{
    await use(new popularItem(page));
  },
   csvData: async ({}, use) => {
    // ESM replacement for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
    const records = parse(
      fs.readFileSync(path.join(__dirname, '../Utils/TestData/data.csv')),
      {
        columns: true,
        skip_empty_lines: true
      }
    );
            

    await use(records);
  }

});




export { test, expect };