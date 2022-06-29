// Testing RoadMap

// Arrage - setup initail app this.state
//   - vist a web page
//   - query for an element
// Act - take an action
//   - interact with that element
// Assert - make an assertion
//   - make an assertion about page content
describe('Go to reno-guide', () => {
  it('should visit', () => {
    cy.visit('/')
  })
})
