import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import PageMain from './pages/PageMain/PageMain'
import PageGame from './pages/PageGame/PageGame'
import Page404 from './pages/Page404/Page404'
import List from './components/List'
import Itetm from './components/Item'
import PageImages from './pages/PageImages/PageImages'

function App() {
  return (
    <BrowserRouter basename ='/memory-react' >
    <Routes>
     <Route path='/' element={<PageMain />} />
     <Route path='/game' element={<PageGame />} />

     <Route path='/images' element={ <PageImages/>}>
     <Route path='list' element={<List/>} />
     <Route path='item/:id' element={ <Itetm/>} />
     </Route>

     <Route path='*' element={<Page404 />} /> 
    </Routes>
    </BrowserRouter>
  )
}

export default App
