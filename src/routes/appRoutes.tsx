import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Details } from "../pages/details";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { EditarProjeto } from "../pages/editarProjeto";

export function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Home/>}> </Route>
                    <Route path="/admin" element={<Login/>}> </Route>
                    <Route path="/details/:projectId" element ={<Details/>}> </Route>
                    <Route path="/editarProjeto/:projectId" element ={<EditarProjeto/>}> </Route>
            </Routes>
        </BrowserRouter>
    )
}
