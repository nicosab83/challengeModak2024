export class ProductPage {

    constructor() {
        this.piecesAvailable = '.quantity--info--Lv_Aw6e span';
    }

    getNumberOfPiecesAvailable() {
        return cy.get(this.piecesAvailable).invoke('text').then((text) => {
            const number = parseInt(text.match(/\d+/)[0], 10);
            return number;
        });
    }

}