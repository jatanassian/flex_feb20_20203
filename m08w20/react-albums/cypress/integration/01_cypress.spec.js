/* eslint-disable no-undef */
describe('test if cypress works', () => {
	it('Does it works?', () => {
		assert.strictEqual(true, true);
	});

	it('can visit the homepage', () => {
		cy.visit('http://localhost:8002/');
	});
});
