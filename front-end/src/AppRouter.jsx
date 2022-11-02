import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import CadastroLivro from './pages/CadastroLivro'
import DetalhesLivro from './pages/DetalhesLivro'
import DetalhesAutor from './pages/DetalhesAutor'
import Home from "./pages/Home"

const AppRouter = () => {

    return (
        <main>
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/Livro' element={<CadastroLivro/> }/>
                    <Route path='/Livrod' element={<DetalhesLivro/> }/>
                    <Route path='/detalhesAutor' element={<DetalhesAutor/>}/>
                </Routes>   
            </Router>
        </main>
    )
}
export default AppRouter