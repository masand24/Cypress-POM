// export default class LoginPageElements {
//   static getUserName() {
//     return cy.get('input[name="username"]');
//   }

//   static getPassword() {
//     return cy.get('input[name="password"]');
//   }

//   static getLoginBtn() {
//     return cy.get('button[type="submit"]');
//   }

//   static getForgetPassword() {
//     return cy.get(".orangehrm-login-forgot");
//   }
// }

export const LoginPageElement = {
  getUserName: () => {
    return cy.get('input[name="username"]');
  },

  getPassword() {
    return cy.get('input[name="password"]');
  },

  getLoginBtn() {
    return cy.get('button[type="submit"]');
  },

  getForgetPassword() {
    return cy.get(".orangehrm-login-forgot");
  },
};
