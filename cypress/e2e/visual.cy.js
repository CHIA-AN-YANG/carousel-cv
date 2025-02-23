describe('can start page', () => {
  it('Loads the home page', () => {
    cy.visit('/');
    cy.wait(1000);
    cy.get('h1').contains('Curriculum Vitae');
  });
});

describe('have basic SEO', () => {
  it('should have h1, h2, h3', () => {
    cy.visit('/');
    cy.get('h1').contains('Curriculum Vitae');
    cy.get('h2');
    cy.get('h3');
  });
  it('should have page title, description, and favicon', () => {
    cy.visit('/');
    cy.get('title').should('contain', 'Anna Yang');
    cy.get('meta[name="description"]').should('have.attr', 'content');
    cy.get('link[rel="icon"]').should('have.attr', 'href');
  });
});

describe('Carousel is working', () => {
  it('height should not exceed window height', () => {
    // check body client height equals window height
    cy.get('body').then(($body) => {
      const bodyHeight = $body[0].clientHeight;
      cy.window().then(($window) => {
        const windowHeight = $window.innerHeight;
        expect(bodyHeight).to.be.equal(windowHeight);
      });
    });
  });
});
describe('Percy Snapshot for UI', () => {
  it('captures homepage', () => {
    // cy.origin('https://anna-yang-dev.vercel.app/', () => {
    //   // cy.percySnapshot is not a function
    //   cy.percySnapshot('Homepage prod build', { widths: [375, 768, 1280] });
    // });
    cy.visit('/');
    cy.percySnapshot('Homepage After', { widths: [375, 768, 1280] });
  });
});
