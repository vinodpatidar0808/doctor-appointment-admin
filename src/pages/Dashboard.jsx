import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import TableRow from "../components/TableRow"
import { showToastMessage } from "../utils"


const Dashboard = () => {
  const navigate = useNavigate()
  const [data, setData] = useState([])

  const getTodaysAppointments = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_BASE_URL}/admin/todays-appointments`, {
        headers: {
          'Authorization': `${sessionStorage.getItem('authToken')}`
        }
      })
      if (data.success) {
        setData(data.appointments)
        if (data.appointments.length === 0) showToastMessage('INFO', 'No appointments for today')
      } else {
        showToastMessage('ERROR', data.message)
      }
    } catch (error) {
      console.log(error)
      if (error.response.status === 401) {
        sessionStorage.removeItem('authToken')
        sessionStorage.removeItem('user')
        navigate('/')
      }
      showToastMessage('ERROR', error.response.data.message)
    }
  }

  useEffect(() => {
    getTodaysAppointments()
    //eslint-disable-next-line
  }, [])

  return (
    <div className="">
      <div className="text-gray-900 text-sm w-full flex justify-end mb-2 px-8">View All </div>
      <div className="w-full flex flex-col ">
        <div className="w-full bg-warmLightGray flex justify-between  px-8 py-2 mb-2 ">
          <p className="flex-1  ">Appointment Date</p>
          <p className="flex-1 flex">Patient Name</p>
          <p className="flex-1 flex ">Dentist Name</p>
          <p className="flex-1 flex ">Service Requested</p>
        </div>
        {
          data?.map((data, index) => <TableRow key={index} row={data} />
          )
        }
      </div>
    </div>
  )
}

export default Dashboard
