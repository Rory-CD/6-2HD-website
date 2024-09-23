import HomePage from '../../../src/components/HomePage.vue'

describe('Homepage', () => {
  it('renders', () => {
    cy.mount(HomePage)
    cy.get('h1').contains('Stay with style')
  })
})