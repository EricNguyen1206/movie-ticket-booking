const currentUserInit = {
    firstName: "John",
    lastName: "Doe",
    gender: "male",
    email: "john@example.com",
    password: "123123123",
};

const currentUser = (state = currentUserInit, { type, payload }) => {
    switch (type) {
        case "SIGNIN":
            state = payload;
            return { ...state };
        case "SIGNOUT":
            state = payload;
            return { ...state };
        default:
            return { ...state };
    }
};

export default currentUser;
