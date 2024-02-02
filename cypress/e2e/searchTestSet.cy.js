/// <reference types="cypress" />
import { HomePage } from "../support/pages/homePage";
import { SearchResultPage } from "../support/pages/searchResultPage";
import { ProductPage } from "../support/pages/productPage";

describe('Search Test Set', () => {

    let data;
    const homePage = new HomePage();
    const searchResultPage = new SearchResultPage();
    const productPage = new ProductPage();

    before(() => {
        cy.fixture('searchFixture.json').then(dataIn => {
            data = dataIn;
        });
    });

    beforeEach(() => {
        cy.visit('');
    });

    it('Search product and verify quantity in the second item from the second results page', () => {
        homePage.searchProduct(data.product);
        searchResultPage.jumpToResultPage(data.productNumber);
        searchResultPage.openProductByPosition(data.productNumber);
        productPage.getNumberOfPiecesAvailable().then((number) => {
            expect(number).to.be.gte(1);
        });
    });

    afterEach(() => {
        cy.window().then((win) => win.close());
    });

});