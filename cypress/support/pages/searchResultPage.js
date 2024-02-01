export class SearchResultPage {

    constructor() {
        this.goToPageInput = '#root > div.root--container--2gVZ5S0.root--newRoot--2-6FirH.search-root-cls > div > div.rightContent2023--rightContainer--2abV4r5 > div.cards2023--pagination--1-0Grbh > ul > li.comet-pagination-options > div > input[type=text]';
        this.goToPageBtn = '//*[@id="root"]/div[1]/div/div[2]/div[3]/ul/li[10]/div/button';
        this.cardOfTheList = 'a[class="multi--container--1UZxxHY cards--card--3PJxwBm search-card-item"]';
    }

    jumpToResultPage(number) {
        cy.get(this.goToPageInput).type(number);
        cy.xpath(this.goToPageBtn).click();
    }

    openProductPageByPosition(position) {
        cy.get(this.cardOfTheList).eq(position).invoke('removeAttr', 'target').click();
    }

}