
import { Route, Routes } from 'react-router-dom'
import './App.css'
import BMICalculator from './BMICalculator'
import Home from './Home'
import BMIchart from './BMIchart'




function App() {
  

  return (
    <>
     <Routes>
        <Route path='/' element={<BMICalculator/>} />
        <Route path='/bmichart' element={<BMIchart/>} />
        <Route path='/home' element={<Home/>} />
     </Routes>
      
    </>
  )
}

export default App
