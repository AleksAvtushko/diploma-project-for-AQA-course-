import { RegistrationForm } from "./registrationForm";

export class TestData {
    static getValues(pageName: "testRegFormWithMinVal" | "testRegFormWithMaxVal" | "testRegFormWithCorrectVal") {
        switch (pageName) {
            case "testRegFormWithMinVal":
                return new RegistrationForm("S", "Qwer", "Y", 17, "Gmale");
            case "testRegFormWithMaxVal":
                return new RegistrationForm(
                    "Stepanenko500000000000",
                    "Qwerty1234567890`1234",
                    "StepanenkaArraratovnaDominatorovna",
                    17,
                    "Gmale",
                );
            case "testRegFormWithCorrectVal":
                return new RegistrationForm("Stepanenko@mail.ru", "Qwerty123!", "Stepanenka", 25, "Female");
            default:
                return new RegistrationForm("Stepanenko@mail.ru", "Qwerty123!", "Stepanenka", 25, "Female");
        }
    }
}

// status code

export class StatusCode {
    static getStatus(
        StatusCode:
            | "ExpectedCode200"
            | "ExpectedCode201"
            | "ExpectedCode204"
            | "ExpectedCode400"
            | "ExpectedCode404"
            | "ExpectedCode500",
    ) {
        switch (StatusCode) {
            case "ExpectedCode200":
                return 200;
                break;
            case "ExpectedCode201":
                return 201;
                break;
            case "ExpectedCode204":
                return 204;
                break;
            case "ExpectedCode400":
                return 400;
                break;
            case "ExpectedCode404":
                return 404;
                break;
            case "ExpectedCode500":
                return 500;
                break;
        }
    }
}
