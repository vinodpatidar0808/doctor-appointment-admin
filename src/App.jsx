import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import Hello from "./components/Hello"
import Login from "./pages/Login"

function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/admin/login" element={<Login />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
