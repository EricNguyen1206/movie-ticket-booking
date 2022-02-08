import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact="true" path="/" element={<Home />} />
                    <Route exact="true" path="/login" element={<Login />} />
                    <Route
                        exact="true"
                        path="/register"
                        element={<Register />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
