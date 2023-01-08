import { RegistrationForm } from "../scr/registrationForm";
import { expect } from "@jest/globals";
import { TestData } from "../scr/commonJest";

describe("Negative Tests", function () {
    test("Check message if login < then 2 symbols", function () {
        expect(TestData.getValues("testRegFormWithMinVal").MaxMinSymbolsLog()).toBe("We should add min 2 symbols");
    });

    test("Check message if login > then 20 symbols", function () {
        expect(TestData.getValues("testRegFormWithMaxVal").MaxMinSymbolsLog()).toBe("We can enter max 20 symbols");
    });

    test("Check valid login message doesn't display if value incorrect", function () {
        expect(TestData.getValues("testRegFormWithMinVal").MaxMinSymbolsLog()).not.toBe(
            `This login name: ${TestData.getValues("testRegFormWithMinVal").login} is correct`,
        );
    });

    test("Check message if password < then 8 symbols", function () {
        expect(TestData.getValues("testRegFormWithMinVal").MaxMinSymbolsPassword()).toBe("We should add min 8 symbols");
    });

    test("Check message if password > then 20 symbols", function () {
        expect(TestData.getValues("testRegFormWithMaxVal").MaxMinSymbolsPassword()).toBe("We can enter max 20 symbols");
    });

    test("Check valid password message doesn't display if value incorrect", function () {
        expect(TestData.getValues("testRegFormWithMinVal").MaxMinSymbolsPassword()).not.toBe(
            `This password ${TestData.getValues("testRegFormWithMinVal").password} is correct`,
        );
    });

    test("Check message if age < then 18 symbols", function () {
        expect(TestData.getValues("testRegFormWithMinVal").MinAge()).toBe("You must be over 18");
    });

    test("Check valid age message doesn't display if value incorrect", function () {
        expect(TestData.getValues("testRegFormWithMinVal").MinAge()).not.toBe(
            `You have more then ${TestData.getValues("testRegFormWithMinVal").age} age. You can check this site`,
        );
    });

    test("Check message if sex not equal Male or Female", function () {
        expect(TestData.getValues("testRegFormWithMinVal").SelectorSex()).toBe("enter correct sex Male or Female");
    });

    test("Check message if name < then 2 characters", function () {
        expect(TestData.getValues("testRegFormWithMinVal").NameValue()).toBe(
            "The name cannot be empty or have less than 2 characters",
        );
    });

    test("Check message if name > then 25 characters", function () {
        expect(TestData.getValues("testRegFormWithMaxVal").NameValue()).toBe(
            "The name cannot be have more than 25 characters",
        );
    });
});

describe("Positive tests value", function () {
    test("Check valid login", function () {
        expect(TestData.getValues("testRegFormWithCorrectVal").MaxMinSymbolsLog()).toBe(
            `This login name: ${TestData.getValues("testRegFormWithCorrectVal").login} is correct`,
        );
    });

    test("Check valid password value", function () {
        expect(TestData.getValues("testRegFormWithCorrectVal").MaxMinSymbolsPassword()).toBe(
            `This password: ${TestData.getValues("testRegFormWithCorrectVal").password} is correct`,
        );
    });

    test("Check valid age value", function () {
        expect(TestData.getValues("testRegFormWithCorrectVal").MinAge()).toBe(
            `You have more then ${TestData.getValues("testRegFormWithCorrectVal").age} age. You can check this site`,
        );
    });

    test("Check valid sex value", function () {
        expect(TestData.getValues("testRegFormWithCorrectVal").SelectorSex()).toBe(
            `${TestData.getValues("testRegFormWithCorrectVal").sex}`,
        );
    });

    test("Check valid name value", function () {
        expect(TestData.getValues("testRegFormWithCorrectVal").NameValue()).toBe(
            `${TestData.getValues("testRegFormWithCorrectVal").name}`,
        );
    });
});
