// it('loads examples', () => {
//   cy.visit('/tabs/tab4');
//   cy.contains('Top 10');
// });

/// <reference types='cypress' />
import Chance from 'chance';
const chance = new Chance

describe('FlickMate Login', () => {
  // const email = chance.email();
  // const pass = 'ValidPassword123';
  const email = "johncummins1997@gmail.com"
  const pass = 'Flick12345678';

  // beforeEach(() => {
  //   cy.visit('http://localhost:8100/login');
  // })

  // it('has a title', () => {
  //   cy.get('#ion-input-1-lbl').should('contain', 'Manual Log in')

  // })

  it('User Login', () => {
    cy.visit('http://localhost:8100/login');
    cy.url().should('include', 'login');
    cy.get('input[name=ion-input-0]').type(email);
    cy.get('input[name=ion-input-1]').type(pass);
    cy.get('ion-button[type=submit]').click();
    // cy.wait(500)
  });



  it('has a title', () => {
    cy.contains('Tab 1')
    cy.get('#tab-button-tab4').click();
    cy.contains('Tab 1')



  })



});
