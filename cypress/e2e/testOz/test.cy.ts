import { logger } from "../../../configLog4js";
import log4js from "log4js";

describe("visit oz.by site", () => {
    beforeEach(() => {
        cy.visit("https://oz.by/");
    });

    it("check: logo is displayed", () => {
        cy.get("[class=top-panel__logo__item]").should("be.visible");
    });

    it("check: search with invalid value", () => {
        const invalidValue = "invalidSearch";
        cy.get("[id=top-s]").type(`${invalidValue} {enter}`);
        cy.get('h1[class="breadcrumbs__list__item"]')
            .find("span")
            .should("have.text", `По запросу «${invalidValue}» ничего не найдено`);
    });

    it("check: search with valid value", () => {
        const searchValue = "Стивен кинг";
        cy.SearchFilter("Стивен кинг");
        cy.get('h1[class="breadcrumbs__list__item"]')
            .find("span")
            .should("have.text", `Найдено 285 товаров по запросу «${searchValue}»`);
    });

    it("check: checkbox is unchecked", () => {
        cy.SearchFilter("Стивен кинг");
        const isUnchecked = cy.get("[id=ul_availability] [class=filters__chkslist__chk ]").first().click();
        isUnchecked.should("not.be.checked");
    });

    it("check: checkbox is checked", () => {
        cy.SearchFilter("Стивен кинг");
        cy.get("[id=ul_availability] [class=filters__chkslist__chk]").should("have.length", 4).last().click();
        cy.get('[class*="fm-element-panel filters__chkslist__li filters__chkslist"] :checked')
            .should("have.length", 4)
            .should("be.checked");
    });

    it("check: category removed from filter after uncheck", () => {
        cy.intercept(
            "GET",
            "https://oz.by/search/?q=%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD+%D0%BA%D0%B8%D0%BD%D0%B3+",
        ).as("searchText");
        cy.SearchFilter("Стивен кинг");
        cy.get("[id=ul_availability] [class=filters__chkslist__chk ]").first().click();
        cy.wait("@searchText");
        cy.get('[class="dp-showresults__content"]').click();
        cy.get(' [class="top-filters__sqcheckers__item"]').first().should("not.have.text", "На складе");
    });
});
