export class Lobby {
  clickOnDesktopLobbyBtn() {
    cy.contains(".btn-link", "Desktop Lobby").click();
    cy.location("pathname").should(
      "match",
      /\/operator\/bombaydemo\/bombay-live-lobby\/fun/
    );
  }
}

export const lobby = new Lobby();
