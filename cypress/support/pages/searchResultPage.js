export class SearchResultPage {

    constructor() {
        this.goToPageInput = 'input[aria-label="Page"]';
        this.goToPageBtn = '.comet-pagination-options-quick-jumper-button';
        this.cardOfTheList = 'a[class="multi--container--1UZxxHY cards--card--3PJxwBm search-card-item"]';
    }

    jumpToResultPage(number) {
        cy.get(this.goToPageInput).type(number);
        cy.get(this.goToPageBtn).click();
    }

    openProductByPosition(position) {
        cy.get(this.cardOfTheList).eq(position).invoke('removeAttr', 'target').click();
    }

}