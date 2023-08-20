import RecruitmentPageElement from "../page_elements/RecruitmentPageElement";

export default class RecruitmentPageActions {
  constructor() {
    this.elements = new RecruitmentPageElement();
  }

  navigateToUrl() {
    cy.visit("/");
  }
  validateUserClickOnSidePannel() {
    this.elements.getSidePanel().click();
    this.elements.getAdmin().click();

  }



  ValidateUserProvideJobTitle() {

    this.elements.getUserRole().click();
    cy.contains('ESS').click();
  }
}
