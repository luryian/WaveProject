import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Details } from "../pages/details";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { Design } from "../pages/trilhas/design";
import { Audiovisual } from "../pages/trilhas/audiovisual";
import { Jogos } from "../pages/trilhas/jogos";
import { Sistemas } from "../pages/trilhas/sistemas";





export function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Home/>}> </Route>
                    <Route path="/admin" element={<Login/>}> </Route>
                    <Route path="/details/:projectId" element ={<Details/>}> </Route>
                    <Route path="/design" element ={<Design/>}> </Route>
                    <Route path="/audiovisual" element ={<Audiovisual/>}> </Route>
                    <Route path="/jogos" element ={<Jogos/>}> </Route>
                    <Route path="/sistemas" element ={<Sistemas/>}> </Route>


            </Routes>
        </BrowserRouter>
    )
}
