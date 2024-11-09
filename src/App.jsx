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
          <Route index path="dashboard" element={<PrivateRoute> <Dashboard /></PrivateRoute>} />
          <Route path="services" element={<PrivateRoute>  <Services /></PrivateRoute>} />
          <Route path="reports" element={<PrivateRoute> <Reports /></PrivateRoute>} />
          <Route path="dentist" element={<PrivateRoute> <Dentist /></PrivateRoute>} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>

  )
}

export default App
