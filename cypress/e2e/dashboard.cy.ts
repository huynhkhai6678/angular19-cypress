beforeEach(() => {
  cy.login('admin@bbv.vn', 'pass@Y78');
})

// afterEach(() => {
//   cy.logout();
// })


// describe('Verify Dashboard Page Elements', () => {
//   it('Check that the dashboard page renders the side bar, the table, the button Create Agreement.', () => {
//     cy.visit('http://localhost:4200/dashboard');

//     cy.get('#logo-sidebar').should('exist');
//     cy.get('#agreement-table').should('exist');
//     cy.get('#create-agreement-btn').should('exist');

//   })
// })

// describe('Verify Dashboard Page Elements', () => {
//   it('Check that the dashboard page renders the side bar, the table, the button Create Agreement.', () => {
//     cy.visit('http://localhost:4200/dashboard');

//     let status = cy.get('[id*="status-data"]').first();
//     status.trigger('mouseover');
//   })
// })

describe('Verify Popup elements', () => {
  it('Verify that popup renders the form with expected field and button.', () => {
    cy.visit('http://localhost:4200/dashboard');

    cy.get('#create-agreement-btn').click();
    cy.get('#agreement-modal').should('be.visible');
    cy.get('#first_name').should('be.visible');
    cy.get('#last_name').should('be.visible');
    cy.get('#department').should('be.visible');
    cy.get('#category').should('be.visible');
  })
})