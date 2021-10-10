/// <reference types="cypress" />
import { formatBytes } from '../../src/utils';

describe('Verify application flow', () => {
	it('images added successfully to favorites', () => {
		cy.visit('/');
		cy.get('.search-link').click();
		cy.get('.text-field').type('‘sunshine’').get('.search-button').click();
		cy.get('.addOrRemove-button').eq(0).click().get('.addOrRemove-button').eq(1).click();

		cy.get('.image').eq(0).then(($image1) => {
			cy.get('.image').eq(1).then(($image2) => {
				const addedImgId1 = $image1[0].id;
				const addedImgId2 = $image2[0].id;
				cy.get('.back-button').click();
				cy.get('.image').eq(0).should('have.id', addedImgId1);
				cy.get('.image').eq(1).should('have.id', addedImgId2);
			});
		});
		//cy.wrap({ format: formatBytes }).invoke('format', 5533914).should('eq', '5.3M');

		cy.invoke(formatBytes(5533914)).should('eq', '5.3'); 
	});
});
