import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { CadastrarProjetos } from "../pages/cadastrarProjeto";

export function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Home/>}> </Route>
                    <Route path="/admin" element={<Login/>}> </Route>
                    <Route path="/cadastrarProjeto" element={<CadastrarProjetos/>}> </Route>
            </Routes>
        </BrowserRouter>
    )
}