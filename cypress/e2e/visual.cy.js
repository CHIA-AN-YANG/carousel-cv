const beforeUrl = 'https://anna-yang-dev.vercel.app/';
const afterUrl = 'http://localhost:3000';

describe('can start page', () => {
  it('Loads the home page', () => {
    cy.visit('/');
  });
});
describe('UI Comparison', () => {
  it('captures homepage', () => {
    cy.visit(beforeUrl);
    cy.percySnapshot('Homepage Before', { widths: [375, 768, 1280] });
    cy.visit(afterUrl);
    cy.percySnapshot('Homepage After', { widths: [375, 768, 1280] });
  });
});
