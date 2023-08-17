import LoginPageActions from "../support/page-objects/page_actions/LoginPageActions";

const loginpage = new LoginPageActions();

describe("Login as user", () => {
  beforeEach(() => {
    cy.visit("auth/login");
  });
  it("Verfy login page", () => {
    cy.wait(2000);
    loginpage.loginToApplication();
  });
});
