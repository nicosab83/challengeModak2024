/// <reference types="cypress" />
import { HomePage } from "../support/pages/homePage";
import { SearchResultPage } from "../support/pages/searchResultPage";

describe('Search Test Set”', () => {

    let data;
    const homePage = new HomePage();
    const searchResultPage = new SearchResultPage();
    
    before('Get Fixture', () => {
        cy.fixture('searchFixture.json').then(dataIn => {
            data = dataIn;
        })
    });

    beforeEach('Before Each', () => {
        cy.visit('');
    })

    it('Search product and verfy quantiti in the second item from the second results page', () => {
        homePage.searchProduct(data.product);
        searchResultPage.jumpToResultPage("2");
        searchResultPage.getElementByPosition();
        cy.wait(5000);

    });

});