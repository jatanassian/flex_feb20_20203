/* eslint-disable no-undef */
describe('test the input box', () => {
	beforeEach(() => {
		cy.visit('/');
		cy.get('.search__form').find('input').as('inputField');
	});

	it('can type into input field', () => {
		cy.get('@inputField')
			.type('Avril Lavigne')
			.should('have.value', 'Avril Lavigne');
	});

	it('can handle backspaces', () => {
		cy.get('@inputField')
			.type('NN{backspace}ir_9{backspace}{backspace}vana', { delay: 500 })
			.should('have.value', 'Nirvana');
	});
});
