describe ("forogt Password Page", function() {
    it("forgot page validation", function() {
      cy.visit('https://login.sentryc.com/auth/login')
      cy.get(':nth-child(4) > .base-text').click()
    })
  })