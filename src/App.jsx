import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import Hello from "./components/Hello"

function App() {



  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
