import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { verify } from "../../../app/slices/auth";

const Verify = () => {
    const search = useLocation().search;
    const token = new URLSearchParams(search).get("token");
    const email = new URLSearchParams(search).get("email");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(verify({ token, email }));
        navigate("/");
    }, []);

    return <div>Verifying</div>;
};

export default Verify;
