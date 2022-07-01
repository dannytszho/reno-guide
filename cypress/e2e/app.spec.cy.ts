// Testing RoadMap

// Arrage - setup initail app this.state
//   - vist a web page
//   - query for an element
// Act - take an action
//   - interact with that element
// Assert - make an assertion
//   - make an assertion about page content
describe('Go to reno-guide', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('should have a drop down button', () => {
    cy.get('button').should('exist')
  })

  it('Should have depot URL after clicking', () => {
    cy.get(':nth-child(2) > input').click()
    cy.contains('thedepotreno.com')
  })

  it('Should have Depot info after clicking', () => {
    cy.get(':nth-child(2) > input').click()
    cy.contains('325 E. 4TH STREET, RENO, NV 89512')
    cy.contains('775-737-4330')
    cy.contains('thedepotreno.com')
  })

  it('Should have Louis Basque Corner info after clicking', () => {
    cy.get(':nth-child(3) > input').click()
    cy.contains('301 E. 4TH STREET, RENO, NV 89512')
    cy.contains('775-323-7203')
    cy.contains('louisbasquecorner.com')
  })
  it('Should have Genoa info after clicking', () => {
    cy.get(':nth-child(4) > input').click()
    cy.contains('2282 MAIN ST, GENOA, NV 89411')
    cy.contains('775-782-3870')
    cy.contains('genobar.com')
  })
})
