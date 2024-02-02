export class HomePage {
    
    constructor() {
        this.searchInput = '#search-words';
        this.searchBtnXpath = '//*[@id="_full_container_header_23_"]';
    }

    searchProduct(product) {
        cy.get(this.searchInput).type(product).type('{enter}');
    };
};