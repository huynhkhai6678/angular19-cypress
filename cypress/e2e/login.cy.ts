describe('Verify Login Page Elements', () => {
  it('Check that the login page renders the username input, password input, login button, and error message placeholder.', () => {
    cy.visit('http://localhost:4200');

    cy.get('#email').should('exist');
    cy.get('#password').should('exist');

    cy.get('#login').should('exist');

    cy.get('#errorBlock').should('not.exist');

  })
})


describe('Verify Login Page Validation', () => {
  it('Check that the validation for each input is working correctly or not when the user submits the form.', () => {
    cy.visit('http://localhost:4200');

    cy.get('#email').type('testexample.com');
    cy.get('#password').type('123456');

    cy.get('#login').click();
    cy.get('#emailErrorBlock').should('exist');

  })
})

describe('Unsuccessful Login', () => {
  it('Check that the validation for each input is working correctly or not when the user submits the form.', () => {
    cy.visit('http://localhost:4200');

    cy.get('#email').type('admin@bbv.vn');
    cy.get('#password').type('pass@Y7');

    cy.get('#login').click();
    cy.get('#errorBlock').should('exist');

  })
})

describe('Successful Login', () => {
  it('Check that the validation for each input is working correctly or not when the user submits the form.', () => {
    cy.visit('http://localhost:4200');

    cy.get('#email').type('admin@bbv.vn');
    cy.get('#password').type('pass@Y78');

    cy.get('#login').click();
    cy.url().should('contain', 'dashboard');

  })
})