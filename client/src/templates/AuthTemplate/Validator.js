export default function Validator() {}

Validator.isRequired = function (element, message = "This field is required") {
    const res = element.trim() !== "";
    return {
        test: res,
        message: res ? "Ok" : message,
    };
};

Validator.isEmail = function (
    element,
    message = "Please enter a valid email address"
) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const res = regex.test(element);
    return {
        test: res,
        message: res ? "Ok" : message,
    };
};

Validator.isPhoneNUmber = function (element, message = "Invalid phone number") {
    const regex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
    const res = regex.test(element);
    return {
        test: res,
        message: res ? "Ok" : message,
    };
};

Validator.minLength = function (
    element,
    min,
    message = `Please enter atleast ${min} character`
) {
    const res = element.trim().length >= min;
    return {
        test: res,
        message: res ? "Ok" : message,
    };
};

Validator.isConfirmed = function (
    element,
    pattern,
    message = "Does not matches pattern!"
) {
    const res = element === pattern;
    return {
        test: res,
        message: res ? "Ok" : message,
    };
};
