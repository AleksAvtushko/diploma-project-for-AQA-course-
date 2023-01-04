import { RegistrationForm } from "../scr/registrationForm";

const testRegFormWithMinVal = new RegistrationForm("S", "Qwer", "Y", 17, "Gmale");
const testRegFormWithMaxVal = new RegistrationForm(
    "Stepanenko500000000000",
    "Qwerty1234567890`1234",
    "StepanenkaArraratovnaDominatorovna",
    17,
    "Gmale",
);
const testRegFormWithCorrectVal = new RegistrationForm("Stepanenko@mail.ru", "Qwerty123!", "Stepanenka", 25, "Female");

describe("Negative Tests", function () {
    test("Check message if login < then 2 symbols", function () {
        expect(testRegFormWithMinVal.MaxMinSymbolsLog()).toBe("We should add min 2 symbols");
    });

    test("Check message if login > then 20 symbols", function () {
        expect(testRegFormWithMaxVal.MaxMinSymbolsLog()).toBe("We can enter max 20 symbols");
    });

    test("Check valid login message doesn't display if value incorrect", function () {
        expect(testRegFormWithMinVal.MaxMinSymbolsLog()).not.toBe(
            `This login name: ${testRegFormWithMinVal.login} is correct`,
        );
    });

    test("Check message if password < then 8 symbols", function () {
        expect(testRegFormWithMinVal.MaxMinSymbolsPassword()).toBe("We should add min 8 symbols");
    });

    test("Check message if password > then 20 symbols", function () {
        expect(testRegFormWithMaxVal.MaxMinSymbolsPassword()).toBe("We can enter max 20 symbols");
    });

    test("Check valid password message doesn't display if value incorrect", function () {
        expect(testRegFormWithMinVal.MaxMinSymbolsPassword()).not.toBe(
            `This password ${testRegFormWithMinVal.password} is correct`,
        );
    });

    test("Check message if age < then 18 symbols", function () {
        expect(testRegFormWithMinVal.MinAge()).toBe("You must be over 18");
    });

    test("Check valid age message doesn't display if value incorrect", function () {
        expect(testRegFormWithMinVal.MinAge()).not.toBe(
            `You have more then ${testRegFormWithMinVal.age} age. You can check this site`,
        );
    });

    test("Check message if sex not equal Male or Female", function () {
        expect(testRegFormWithMinVal.SelectorSex()).toBe("enter correct sex Male or Female");
    });

    test("Check message if name < then 2 characters", function () {
        expect(testRegFormWithMinVal.NameValue()).toBe("The name cannot be empty or have less than 2 characters");
    });

    test("Check message if name > then 25 characters", function () {
        expect(testRegFormWithMaxVal.NameValue()).toBe("The name cannot be have more than 25 characters");
    });
});

describe("Positive tests value", function () {
    test("Check valid login", function () {
        expect(testRegFormWithCorrectVal.MaxMinSymbolsLog()).toBe(
            `This login name: ${testRegFormWithCorrectVal.login} is correct`,
        );
    });

    test("Check valid password value", function () {
        expect(testRegFormWithCorrectVal.MaxMinSymbolsPassword()).toBe(
            `This password: ${testRegFormWithCorrectVal.password} is correct`,
        );
    });

    test("Check valid age value", function () {
        expect(testRegFormWithCorrectVal.MinAge()).toBe(
            `You have more then ${testRegFormWithCorrectVal.age} age. You can check this site`,
        );
    });

    test("Check valid sex value", function () {
        expect(testRegFormWithCorrectVal.SelectorSex()).toBe(`${testRegFormWithCorrectVal.sex}`);
    });

    test("Check valid name value", function () {
        expect(testRegFormWithCorrectVal.NameValue()).toBe(`${testRegFormWithCorrectVal.name}`);
    });
});
