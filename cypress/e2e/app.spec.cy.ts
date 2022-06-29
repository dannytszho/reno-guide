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
  it('Should drop down after clicking', () => {
    cy.get(':nth-child(2) > input').click()
    cy.contains('thedepotreno.com')
  })
})
