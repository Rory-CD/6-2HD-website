import HomePage from './HomePage.vue'

describe('Homepage', () => {
  it('renders', () => {
    cy.mount(HomePage)
    cy.get('h1').contains('Stay with style')
  })
})