/* eslint-disable no-undef */
it('can display results from an API query', () => {
	// Visit site
	// cy.visit('http://localhost:8002/');
	cy.visit('/'); // Thanks to baseUrl

	// Tell Cypress to get in the way of ajax/axios calls and respond with fake data
	cy.intercept('GET', '**/search*', { fixture: 'itunes' }).as('loadedData');

	// Get the input field and type "Daft punk"
	cy.get('.search__form').find('input').type('Daft Punk');

	// Get the spinner and make sure it's visible
	cy.get('.spinner').should('be.visible');

	// Wait for the API results to load
	// cy.wait(2000) // setTimeout(2000)
	cy.wait('@loadedData'); // promises .then()

	// Pick one Daft Punk album and make sure it's visible
	cy.contains('Discovery').should('be.visible');
});
