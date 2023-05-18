import "cypress-iframe";
import { desktopLobby } from "./pages/desktop-lobby";
import { lobby } from "./pages/lobby";
import { menuModal } from "./pages/menu-modal";

describe("test", () => {
  beforeEach(() => {
    cy.visit("");
  });

  it("User can add a table game to favorites", () => {
    lobby.clickOnDesktopLobbyBtn(); // selects the desktop lobby
    desktopLobby.welcomePopupShouldBeVisible(); // assertion to verify that the element is visible on the page.
    desktopLobby.enterNicknameAndSave(); // enter manually random nickname
    desktopLobby.addToFavoritesDragonTiger(); // It adds Dragon Tiger 1 to favorites and verifies that it exists on the favorite page.
  });

  it.only("User can change a account nickname", () => {
    lobby.clickOnDesktopLobbyBtn();
    desktopLobby.welcomePopupShouldBeVisible();
    desktopLobby.generateANicknameAndSave();
    desktopLobby.openMenuModal();
    menuModal.changeAccountNickname();
  });
});
