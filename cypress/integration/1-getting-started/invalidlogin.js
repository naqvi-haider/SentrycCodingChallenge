describe ("Invalid login - negative test", function() {
    it("invalid login validation", function() {
      cy.visit('https://login.sentryc.com/auth/login')
      cy.get(':nth-child(1) > .base-borders').type('abc@gmail.com')
      cy.get(':nth-child(2) > .base-borders').type('Xyz321$$')
      cy.get('form').submit()
    })
  })