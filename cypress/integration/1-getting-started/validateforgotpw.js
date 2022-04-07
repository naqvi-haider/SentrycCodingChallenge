describe ("forogt Password Page", function() {
    it("forgot page validation", function() {
      cy.visit('https://login.sentryc.com/auth/login')
      cy.get(':nth-child(4) > .base-text').click()
      cy.get(':nth-child(1) > .base-borders').type('abc@gmail.com')
      cy.get('form').submit()
    })
  })