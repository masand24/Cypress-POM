import {LoginPageElement} from "../page_elements/LoginPageElement";

export default class LoginPageActions {
  // constructor() {
  //   this.elements = new LoginPageElements();
  // }

  navigateToUrl() {
    cy.visit("/");
  }

  validateTitle() {
    return cy.title();
  }

  loginToApplication() {
    LoginPageElement.getUserName().type("admin");
    LoginPageElement.getPassword().type("admin123");
    LoginPageElement.getLoginBtn().click();
  }
}
