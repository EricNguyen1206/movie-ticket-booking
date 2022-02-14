const accountListInit = [
    {
        firstName: "John",
        lastName: "Doe",
        gender: "male",
        email: "john@example.com",
        password: "123123123",
    },
    {
        firstName: "John",
        lastName: "Doe",
        gender: "male",
        email: "john1@example.com",
        password: "123123123",
    },
    {
        firstName: "John",
        lastName: "Doe",
        gender: "male",
        email: "john2@example.com",
        password: "123123123",
    },
    {
        firstName: "John",
        lastName: "Doe",
        gender: "male",
        email: "john3@example.com",
        password: "123123123",
    },
];

const AccountList = (state = accountListInit, { type, payload }) => {
    switch (type) {
        case "GET_ACCOUT_LIST":
            return [...state];
        case "POST_ACCOUT_LIST":
            return [...state, payload];
        default:
            return [...state];
    }
};

export default AccountList;
