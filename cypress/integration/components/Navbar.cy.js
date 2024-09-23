import Navbar from './Navbar.vue'

describe('Navbar', () => {
  const expectedLinks = ['ACCOMMODATION', 'EAT/DRINK', 'EVENTS', 'AMENITIES', 'OFFERS', 'CONTACT']; // The expected links

  it('displays all links', () => {
    cy.mount(Navbar)
    cy.get('.nav-link')                                   // Get all elements with.nav-link class
      .should('have.length', expectedLinks.length)        // Ensure the number of links matches the expected list length
      .each((link, index) => {
        cy.wrap(link)                                     // Wrap the current link in Cypress commands
          .should('contain.text', expectedLinks[index]);  // Check if each link contains the correct text
      });
  });
});