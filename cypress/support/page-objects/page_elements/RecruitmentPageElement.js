export default class DashboardPageElement {
  getSidePanel() {
    return cy.get(".oxd-sidepanel");
  }

  getRecruitment() {
    return cy.get(":nth-child(5) > .oxd-main-menu-item > .oxd-text");
  }

  getAdmin() {
    return cy.get(
      "#app > div.oxd-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(1) > a > span"
    );
  }

  getJobTitleDropDown() {
    return cy.get(
      ":nth-child(1) > .oxd-grid-4 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input"
    );
  }

  putJobTitleAsQaEngineer() {
    return cy.get(
      "#app > div.oxd-layout > div.oxd-layout-container.--collapse > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div:nth-child(1) > div > div:nth-child(1) > div > div:nth-child(2) > div > div > div.oxd-select-text-input"
    );
  }

  getUserRole() {
    return cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
    );
  }
}
