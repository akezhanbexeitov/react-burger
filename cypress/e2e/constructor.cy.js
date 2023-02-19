import { testUrl } from '../../src/constants/constants'

describe('Constructor page', () => {
  beforeEach(() => {
    cy.visit(testUrl)
    cy.viewport(1440, 1080)
  })

  it('should load ingredients', () => {
    cy.get('[class^=burger-ingredients_listItem__]')
      .first()
      .as('bun')

    cy.get('@bun').should('exist') 

    cy.get('@bun')
      .find('img')
      .should('be.visible')
      .and(img => {
        expect(img[0].naturalWidth).to.be.greaterThan(0)
      })
  })

  it('should handle DND for buns to the constructor', () => {
    cy.get('[class^=burger-ingredients_listItem__]')
      .first()
      .as('bun')

    cy.get('[class^=burger-constructor_list__]')
      .children()
      .first()
      .as('topBun')

    cy.get('[class^=burger-constructor_list__]')
      .children()
      .last()
      .as('bottomBun')

    cy.get('@bun').trigger('dragstart') 
    cy.get('@topBun').trigger('drop') 

    cy.get('@topBun')
      .should('contain', 'Краторная булка N-200i (верх)')

    cy.get('@bottomBun')
      .should('contain', 'Краторная булка N-200i (низ)')
  })

  it('should handle DND for sauces to the constructor', () => {
    cy.get('[class^=burger-ingredients_listItem__]')
      .eq('2')
      .as('sauce')

    cy.get('[class^=burger-constructor_list__]')
      .children()
      .eq('1')
      .as('ingredients')

    cy.get('@sauce').trigger('dragstart') 
    cy.get('@ingredients').trigger('drop') 

    cy.get('@ingredients')
      .should('contain', 'Соус Spicy-X')
  })

  it('should handle DND for mains to the constructor', () => {
    cy.get('[class^=burger-ingredients_listItem__]')
      .eq('7')
      .as('main1')

    cy.get('[class^=burger-ingredients_listItem__]')
      .eq('10')
      .as('main2')

    cy.get('[class^=burger-constructor_list__]')
      .children()
      .eq('1')
      .as('ingredients')

    cy.get('@main1').trigger('dragstart') 
    cy.get('@ingredients').trigger('drop') 

    cy.get('@main2').trigger('dragstart') 
    cy.get('@ingredients').trigger('drop') 

    cy.get('@ingredients')
      .should('contain', 'Мясо бессмертных моллюсков Protostomia')
      .should('contain', 'Хрустящие минеральные кольца')
  })

  it('should go to login page after clicking make order button and go back to the constructor page. User should be able to make order after logging in', () => {
    cy.get('[class^=burger-ingredients_listItem__]')
      .first()
      .as('bun')

    cy.get('[class^=burger-ingredients_listItem__]')
      .eq('2')
      .as('sauce')

    cy.get('[class^=burger-constructor_list__]')
      .children()
      .eq('1')
      .as('ingredients')
  
    cy.get('[class^=burger-constructor_list__]')
      .children()
      .first()
      .as('topBun')

    cy.get('@bun').trigger('dragstart') 
    cy.get('@topBun').trigger('drop') 

    cy.get('@sauce').trigger('dragstart') 
    cy.get('@ingredients').trigger('drop')

    cy.get('[data-testid=make_order_button]').as('orderButton')
    cy.get('@orderButton').click()

    cy.get('[class^=login_wrapper__]').should('exist') 

    const email = 'akidulatini@mail.ru'
    const password = 123456789
    cy.get('[class^=input__container]')
      .children()
      .first()
      .type(email)

    cy.get('[class^=input__container]')
      .children()
      .last()
      .type(`${password}{enter}`)

    cy.get('[class^=burger-ingredients_container__]').should('exist')
    cy.get('[class^=burger-constructor_container__]').should('exist')
    cy.get('[class^=burger-constructor_list__]').should('exist')

    cy.get('@orderButton').click()
    cy.get('#react-modals').should('exist')
  })
  
  it('should open modal when clicking on ingredient and exit when clicking on X', () => {
    cy.get('[class^=burger-ingredients_listItem__]')
      .first()
      .click()
    cy.get('[class^=modal_modal__]').should('exist')

    cy.get('[class^=modal_close__]').click()
    cy.get('[class^=modal_modal__]').should('not.exist')
  })
})
