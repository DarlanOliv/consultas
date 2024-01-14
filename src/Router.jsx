import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { CreatePaciente } from "./pages/CreatePaciente"
import { CreateConsulta } from "./pages/CreateConsulta"
import { ListaPaciente } from "./pages/ListaPaciente"

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/paciente" element={<CreatePaciente />}/>
            <Route path="/consulta" element={<CreateConsulta />}/>
            <Route path="/listagem" element={<ListaPaciente />}/>
        </Routes>
    )
}

{/**<Route path="/paciente/:id" element={<CreatePaciente />}/> */}