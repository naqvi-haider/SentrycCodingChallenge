describe ("Validate login page", function() {
  it("login validation", function() {
    cy.visit('https://login.sentryc.com/auth/login')
    cy.get(':nth-child(1) > .base-borders').type('abc@gmail.com')
    cy.get(':nth-child(2) > .base-borders').type('Abc123$$')
    cy.get('form').submit()
  })

  
    it("invalid login validation", function() {
      cy.visit('https://login.sentryc.com/auth/login')
      cy.get(':nth-child(1) > .base-borders').type('abc@gmail.com')
      cy.get(':nth-child(2) > .base-borders').type('Xyz321$$')
      cy.get('form').submit()
    })

    it("forgot password page", function() {
      cy.visit('https://login.sentryc.com/auth/login')
      cy.get(':nth-child(4) > .base-text').click()
    })

    it("forgot password page validation", function() {
      cy.visit('https://login.sentryc.com/auth/login')
      cy.get(':nth-child(4) > .base-text').click()
      cy.get(':nth-child(1) > .base-borders').type('abc@gmail.com')
      cy.get('form').submit()
    })
  
    it("Terms and Conditions page page validation", function() {
      cy.visit('https://login.sentryc.com/auth/login')
      cy.get('[href="/terms"]').click()
      cy.visit('https://login.sentryc.com/auth/login')
      cy.get('[href="/conditions"]').click()
    })

})