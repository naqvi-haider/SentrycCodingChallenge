describe ("Terms and Conditions page", function() {
    it("Terms and Conditions page page validation", function() {
      cy.visit('https://login.sentryc.com/auth/login')
      cy.get('[href="/terms"]').click()
      cy.visit('https://login.sentryc.com/auth/login')
      cy.get('[href="/conditions"]').click()
    })
  })