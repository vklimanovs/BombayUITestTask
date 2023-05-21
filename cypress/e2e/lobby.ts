import "cypress-iframe";
import { desktopLobby } from "./pages/desktop-lobby";
import { lobby } from "./pages/lobby";
import { menuModal } from "./pages/menu-modal";

describe("Bombay UI tests", () => {
  beforeEach(() => {
    cy.visit("");
  });

  it("User can add a table game to favorites", () => {
    lobby.clickOnDesktopLobbyBtn();
    desktopLobby.welcomePopupShouldBeVisible();
    desktopLobby.enterNicknameAndSave();
    desktopLobby.addToFavoritesDragonTiger();
  });

  it("User can change a account nickname", () => {
    lobby.clickOnDesktopLobbyBtn();
    desktopLobby.welcomePopupShouldBeVisible();
    desktopLobby.generateANicknameAndSave();
    desktopLobby.openMenuModal();
    menuModal.changeAccountNickname();
  });
});
