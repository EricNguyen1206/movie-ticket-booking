import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate";
import PageNotFound from "./templates/PageNotFound";
// import { routeHome, routeAuth } from "./Routes/";
import { routeHome, routeAuth, routeAdmin } from "./Routes";
import React, { Suspense } from "react";
import "./App.css";

function App() {
    const renderLayoutHome = (routes) => {
        if (routes && routes.length > 0) {
            return routes.map((item, index) => {
                return (
                    <Route
                        key={index}
                        exact={item.exact}
                        path={item.path}
                        element={<HomeTemplate>{item.element}</HomeTemplate>}
                    />
                );
            });
        }
    };

    const renderLayoutAuth = (routes) => {
        if (routes && routes.length > 0) {
            return routes.map((item, index) => {
                return (
                    <Route
                        key={index}
                        exact={item.exact}
                        path={item.path}
                        element={item.element}
                    />
                );
            });
        }
    };

    const renderLayoutAdmin = (routes) => {
        if (routes && routes.length > 0) {
            return routes.map((item, index) => {
                return (
                    <Route
                        key={index}
                        exact={item.exact}
                        path={item.path}
                        element={item.element}
                    />
                );
            });
        }
    };

    return (
        <div className="App">
            <BrowserRouter>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        {renderLayoutHome(routeHome)}
                        {renderLayoutAuth(routeAuth)}
                        {renderLayoutAdmin(routeAdmin)}
                        <Route path="" element={<PageNotFound />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </div>
    );
}

export default App;
