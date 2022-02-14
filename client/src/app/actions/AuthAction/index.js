const signout = () => ({
    type: "SIGNOUT",
    payload: null,
});

const signin = (user) => ({
    type: "SIGNIN",
    payload: user,
});

export { signin, signout };
