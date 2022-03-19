import { Routes as Router, Route } from "react-router-dom";
import { Login } from "./pages/Login";

export const Routes = () => {
    return (
        <Router>
            <Route path="/" element={<Login/>} />
        </Router>
    )
}