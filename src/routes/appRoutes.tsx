import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Login } from "../pages/login";

export function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="/" element={<Home/>}> </Route>
                    <Route path="/admin" element={<Login/>}> </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}