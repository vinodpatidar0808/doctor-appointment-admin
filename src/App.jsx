import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import MainLayout from "./components/MainLayout"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Reports from "./pages/Reports"
import Services from "./pages/Services"
import Dentist from "./pages/Dentist"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<MainLayout />}>
          {/* Nested routes */}
          <Route index element={<Dashboard />} /> Default component
          <Route path="services" element={<Services />} />
          <Route path="reports" element={<Reports />} />
          <Route path="dentist" element={<Dentist />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>

  )
}

export default App
