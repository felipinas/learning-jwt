import { Routes as Router, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";

export const Routes = () => {
    return (
        <Router>
            <Route path="/" element={<Login/>} />
            <Route path="/profile" element={<Profile/>} />
        </Router>
    )
}