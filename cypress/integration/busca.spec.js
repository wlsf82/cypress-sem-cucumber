/* busca.spec.js
 *
 * Feature: Buscador web
 *   Como um usuário da world-wide web
 *   Quero realizar buscas por assuntos do meu interesse
 *   Para aprofundar meus conhecimentos
 */

describe('Buscador web', () => {
  context('Dado que acesso a página do buscador', () => {
    beforeEach(() => {
      cy.visit('https://duckduckgo.com')
    })
    
    context('Quando digito um termo e clico na lupa', () => {
      beforeEach(() => {
        cy.get('#search_form_input_homepage')
          .type('cypress')
        cy.get('#search_button_homepage')
          .click()
      })

      it('Então vejo uma lista de resultados sobre o termo que procurei', () => {
        cy.get('.results .result')
          .should('have.length', 11)
      })
    })

    context('Quando digito um termo e pressiono ENTER', () => {
      beforeEach(() => {
        cy.get('#search_form_input_homepage')
          .type('cypress{enter}')
      })

      it('Então vejo uma lista de resultados sobre o termo que procurei', () => {
        cy.get('.results .result')
          .should('have.length', 11)
      })
    })
  })
})
