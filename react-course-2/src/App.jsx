
import { Routes, Route  } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Imagelink from './components/Imagelink'

 
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Signup' element={<Signup/>} />
        <Route path='/' element={<Imagelink/>} />
      </Routes>

    </div>
  )
}

export default App
