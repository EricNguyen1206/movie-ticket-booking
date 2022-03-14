import axios from "../utils/axios";
const register = (email, password, firstName, lastName, gender, birthday) => {
    return axios.post("/api/sign-up", {
        email,
        password,
        firstName,
        lastName,
        gender,
        birthday,
    });
};
const login = (email, password) => {
    return axios
        .post("/api/sign-in", {
            email,
            password,
        })
        .then((response) => {
            if (response.data.token) {
                localStorage.setItem(
                    "user",
                    JSON.stringify({
                        ...response.data.user,
                        accessToken: response.data.token,
                    })
                );
            }
            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

const verify = ({ token, email }) => {
    const response = axios.post("/api/verify-account", {
        token,
        email,
    });
    return response.data;
};
const authService = {
    register,
    login,
    logout,
    verify,
};
export default authService;
