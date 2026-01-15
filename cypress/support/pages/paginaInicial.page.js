const BTN_LOGIN = '.shop-menu > .nav > :nth-child(4)'

class PaginaInicial {
  acessarLogin() {
    cy.get(BTN_LOGIN).click()
  }
}

export default new PaginaInicial()
