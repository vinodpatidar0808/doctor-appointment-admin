import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import MainLayout from "./components/MainLayout"
import Dashboard from "./pages/Dashboard"
import Dentist from "./pages/Dentist"
import Login from "./pages/Login"
import PrivateRoute from "./pages/PrivateRoute"
import Reports from "./pages/Reports"
import Services from "./pages/Services"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/" element={<PrivateRoute> <MainLayout /></PrivateRoute>}>
          <Route index path="/dashboard" element={<Dashboard />} />
          <Route path="/services" element={<Services />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/dentist" element={<Dentist />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>

  )
}

export default App
