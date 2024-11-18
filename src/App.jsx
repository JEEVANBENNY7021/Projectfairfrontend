
import { Navigate, Route,Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Auth from './Pages/Auth'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import Projects from './Pages/Projects'
import PageNotfound from './Pages/PageNotfound'

function App() {


  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth register/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='Projects' element={<Projects/>}/>
        <Route path='*' element={<Navigate to ={'/'}/>}/>
      </Routes>
      <Footer/>
    </>
  )
}


export default App
