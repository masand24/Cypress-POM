import LoginPageActions from "../support/page-objects/page_actions/LoginPageActions";
import RecruitmentPageActions from "../support/page-objects/page_actions/RecruitmentPageActions";

const loginpage = new LoginPageActions();
const recruitmentpage = new RecruitmentPageActions();

describe("Login as user", () => {
  beforeEach(() => {
    cy.visit("auth/login");
  });

  it("Verfy user create a new job recruitment under recruitment for QA Engineer", () => {
    cy.wait(2000);
    loginpage.loginToApplication();
    recruitmentpage.validateUserClickOnSidePannel();
    recruitmentpage.ValidateUserProvideJobTitle();
  });
});