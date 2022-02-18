const signout = () => ({
    type: "SIGNOUT",
    payload: null,
});

const signin = (user) => ({
    type: "SIGNIN",
    payload: user,
});

const signup = (user) => ({
    type: "SIGNUP",
    payload: user,
});

export { signin, signout, signup };
