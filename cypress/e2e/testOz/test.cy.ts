describe("visit oz.by site positive tests", () => {
    beforeEach(() => {
        cy.visit("https://oz.by/");
    });

    it("check: logo is displayed", () => {
        cy.get("[class=top-panel__logo__item]").should("be.visible");
    });

    it("check: phone number is displayed on head page", () => {
        cy.get('[class="top-panel__hnav__phone__numb"]').should("have.text", "695-25-25");
    });

    it("check: menu carousel on the home page", () => {
        cy.get('[class="offers-slider__pagination__item"]').should("be.visible");
    });

    it.only("check: correct result is displayed in carousel menu", () => {
        const expectedRes = "Товары для бани и сауны";
        cy.get('[class="offers-slider__pagination__items"]').find('[href="#8"]').click();
        cy.get('[class="offers-slider__item__main-title"]').eq(9).should("have.text", expectedRes);
    });

    it("check: add item to card from the preview menu", () => {
        cy.get('[class="menu-link-action main-nav__list__item "]').eq(3).click();
        cy.get('[class="item-type-card__btn"]').first().click();
        cy.get('[class="top-panel__userbar__cart__count"]').should("have.text", "1");
    });

    it("check: the selected path is not reset after refresh page", () => {
        cy.get('[class="menu-link-action main-nav__list__item "]').eq(3).click();
        cy.get('[class="landing-nav-list__title"]').eq(2).click();
        cy.reload();
        cy.get('[itemprop="name"]').last().should("have.text", "Конструкторы");
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

    it("check: filter by cheapest", () => {
        cy.get('[class="menu-link-action main-nav__list__item "]').first().click();
        cy.get('[class="top-filters__eselect__item top-filters__viewer__open"]').click();
        cy.get('[class="filters__chkslist__li "]').eq(1).click();
        cy.get('[class="item-type-card__btn"]').eq(1).should("not.have.text", `1.00 руб.`);
    });
});

describe("visit oz.by site negative tests", () => {
    beforeEach(() => {
        cy.visit("https://oz.by/");
    });

    it("check: search with invalid value", () => {
        const invalidValue = "invalidSearch";
        cy.get("[id=top-s]").type(`${invalidValue} {enter}`);
        cy.get('h1[class="breadcrumbs__list__item"]')
            .find("span")
            .should("have.text", `По запросу «${invalidValue}» ничего не найдено`);
    });

    it("Check: click to search filter without value", () => {
        cy.get('[class="top-panel__search__btn__item"]')
            .click()
            .should("not.be.selected", '[class="breadcrumbs__list__li active last a-open "]');
    });
});
