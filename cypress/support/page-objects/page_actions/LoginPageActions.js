import LoginPageElement from "../page_elements/LoginPageElement";

export default class LoginPageActions {
  constructor() {
    this.elements = new LoginPageElement();
  }

  navigateToUrl() {
    cy.visit("/");
  }

  validateTitle() {
    return cy.title();
  }

  loginToApplication() {
    this.elements.getUserName().type("admin");
    this.elements.getPassword().type("admin123");
    this.elements.getLoginBtn().click();
  }
}
