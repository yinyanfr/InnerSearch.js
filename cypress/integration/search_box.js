describe('Test number one', () => {
  it('is yinyan a chinese' , function () {
      expect(true).to.equal(true);
  })
  it('is yinyan a chinese' , function () {
      cy.visit('http://localhost:8080')

      cy.get('.searchbox')
          .type('a')
          .should('have.value', 'a')
  })
})