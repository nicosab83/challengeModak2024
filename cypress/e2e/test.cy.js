/// <reference types="cypress" />
import { HomePage } from "../support/pages/homePage";
import { SearchResultPage } from "../support/pages/searchResultPage";

describe('Test”', () => {

    let data;
    const homePage = new HomePage();
    const searchResultPage = new SearchResultPage();
    
    it('Search product and verfy quantiti in the second item from the second results page', () => {
        cy.visit('https://www.aliexpress.us/w/wholesale-instax-mini.html?page=2&g=y&SearchText=instax+mini');
        searchResultPage.getElementByPosition();
        cy.wait(5000);
    });

});