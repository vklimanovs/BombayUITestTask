import { faker } from "@faker-js/faker";

export class MenuModal {
  private settingsBtn: string;
  private editNicknameBtn: string;
  private nicknameInput: string;

  constructor() {
    this.settingsBtn = '[data-test-id="menu-link-settings"]';
    this.editNicknameBtn =
      '[data-test-id="button-click-edit-username-in-settings"]';
    this.nicknameInput = '[data-test-id="entry-username-input"]';
  }

  changeAccountNickname() {
    cy.iframe().find(this.settingsBtn).first().click();

    let nickname;

    cy.iframe()
      .find(".account-component")
      .within(() => {
        cy.get(this.editNicknameBtn).click();

        cy.get(this.nicknameInput)
          .clear()
          .type(`${faker.name.firstName()}${faker.color.human()}`)
          .invoke("val")
          .then((text) => {
            nickname = text;
            cy.get(this.editNicknameBtn).first().click();
            cy.get(".current-username").should("have.text", nickname);
          });
      });
  }
}

export const menuModal = new MenuModal();

// There are two buttons with the same data-test-id but the class for one is green
// also I could do this way cy.get('button.button.green[data-test-id="button-click-edit-username-in-settings"]').click();
