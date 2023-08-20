export default class LoginPageElement {
  getUserName() {
    return cy.get('input[name="username"]');
  }

  getPassword() {
    return cy.get('input[name="password"]');
  }

 getLoginBtn() {
    return cy.get('button[type="submit"]');
  }

  getForgetPassword() {
    return cy.get(".orangehrm-login-forgot");
  }

  
}
