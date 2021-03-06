describe("get weather and average its temp", () =>{
    it("get weather",  () =>{
        cy.visit('https://weather.com/').wait(5000);
        cy.contains('div', 'Search City or Zip Code').should('be.visible')
        cy.get('[data-testid="searchModalInputBox"]').should('exist')
            .type('kathmandu', { timeout: 10000 })
            .then(() => {
                cy.get('#LocationSearch_listbox')
                    .should('exist')
                    .find('button').eq(0).click()
            })
        cy.contains('span', '10 Day').click();
        cy.contains('div', '10 Day Weather').should('be.visible')
        cy.get(`.DetailsSummary--highTempValue--3Oteu[data-testid="TemperatureValue"]`)
            .each(($high) => {
                cy.log($high.text())
            })
        let sum = [];
        cy.get(`.DetailsSummary--lowTempValue--3H-7I[data-testid="TemperatureValue"]`)
            .each(($el) => {
                sum.push($el.text())
            })
            .then(() => {
                var total = 0;
                sum.forEach((el) => {
                    cy.log(el);
                    total = parseInt(el) + total;
                })
                cy.log(total)
            })
    })
})