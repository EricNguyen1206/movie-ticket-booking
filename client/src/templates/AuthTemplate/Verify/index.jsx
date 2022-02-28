import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userVerify } from "../../../app/reducers/Auth/userSlice";

const Verify = () => {
    const search = useLocation().search;
    const token = new URLSearchParams(search).get("token");
    const email = new URLSearchParams(search).get("email");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(userVerify({ token, email }));
        console.log("isAuthenticated", isAuthenticated);
        navigate("/");
    }, []);

    return <div>Verifying</div>;
};

export default Verify;
