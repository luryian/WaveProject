import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Details } from "../pages/details";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { Design } from "../pages/design";


export function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Home/>}> </Route>
                    <Route path="/admin" element={<Login/>}> </Route>
                    <Route path="/details/:projectId" element ={<Details/>}> </Route>
                    <Route path="/design" element ={<Design/>}> </Route>

            </Routes>
        </BrowserRouter>
    )
}
