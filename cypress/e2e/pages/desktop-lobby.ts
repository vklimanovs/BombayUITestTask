///<reference types="cypress-iframe" />
import "cypress-iframe";
import { faker } from "@faker-js/faker";

export class DesktopLobby {
  private enterNickname: string;
  private generateNickname: string;
  private welcomePopup: string;
  private addFavouriteBtn: string;
  private saveUsernameBtn: string;
  private menuModalBtn: string;

  constructor() {
    this.enterNickname = '[data-test-id="entry-username-input"]';
    this.generateNickname = '[data-test-id="generate-username-button"]';
    this.welcomePopup = '[data-test-id="username-popup"]';
    this.addFavouriteBtn = '[data-testid="FavouriteButton"]';
    this.saveUsernameBtn = '[data-test-id="save-username-button"]';
    this.menuModalBtn = '[data-test-id="button-click-open-menu-modal"]';
  }

  openMenuModal() {
    cy.iframe().find(this.menuModalBtn).click();
  }

  welcomePopupShouldBeVisible() {
    cy.iframe().find(this.welcomePopup).should("be.visible");
  }

  enterNicknameAndSave() {
    cy.iframe()
      .find(this.enterNickname)
      .type(`${faker.name.firstName()}${faker.color.human()}`);
    cy.iframe().find(this.saveUsernameBtn).click();
  }

  generateANicknameAndSave() {
    cy.iframe().find(this.generateNickname).click();
    cy.iframe().find(this.saveUsernameBtn).click();
  }

  addToFavoritesDragonTiger() {
    cy.iframe().find(".menu-item.button-icon.dragonTiger").click();
    cy.iframe().find(".tables-list").should("contain", "Dragon Tiger 1");
    cy.iframe().find(this.addFavouriteBtn).click();
    cy.iframe().find(".menu-item.button-icon.favourites ").click();
    cy.iframe().find(".tables-list").should("contain", "Dragon Tiger 1");
  }
}

export const desktopLobby = new DesktopLobby();
