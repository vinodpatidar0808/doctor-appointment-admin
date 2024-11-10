import axios from "axios"
import moment from 'moment'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import ReportTableRow from "../components/ReportTableRow"

const Reports = () => {
  const navigate = useNavigate()
  const [reportView, setReportView] = useState('weekly')
  const [data, setData] = useState([])


  const getReportData = async () => {
    let startDate = ''
    let endDate = ''
    if (reportView === 'weekly') {
      // week will be from monday to friday
      startDate = moment().startOf('week').add(1, 'days').format('YYYY/MM/DD')
      endDate = moment().endOf('week').add(1, 'days').format('YYYY/MM/DD')
    } else if (reportView === 'monthly') {
      startDate = moment().startOf('month').format('YYYY/MM/DD')
      endDate = moment().endOf('month').format('YYYY/MM/DD')
    }
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_BASE_URL}/admin/reports?startDate=${startDate}&endDate=${endDate}`,
        {
          headers: {
            'Authorization': `${sessionStorage.getItem('authToken')}`
          }
        }
      )
      console.log(data)
      if (data.success) {
        setData(data.reports)
      }
    } catch (error) {
      if (+error.response.status === 401) {
        sessionStorage.removeItem('authToken')
        sessionStorage.removeItem('user')
        navigate('/')
      }
      console.log(error)
    }
  }


  useEffect(() => {
    getReportData()
    //eslint-disable-next-line
  }, [reportView])


  return (
    <div className="">
      <div className="text-gray-900 text-sm w-full flex  mb-2 ">
        <button onClick={() => setReportView('weekly')} className={`px-10 py-2 border-2 border-softGray ${reportView === 'weekly' ? 'bg-white   border-gray-900  text-gray-900' : 'bg-paleRose '}`}>
          Weekly
        </button>
        <button onClick={() => setReportView('monthly')} className={`px-10 py-2 border-2 border-softGray ${reportView === 'monthly' ? 'bg-white   border-gray-900  text-gray-900' : 'bg-paleRose '}`}>
          Monthly
        </button>
      </div>
      <div className="w-full flex flex-col ">
        <div className="w-full bg-warmLightGray flex justify-between  px-8 py-2 mb-2 ">
          <p className="flex-1  ">Date</p>
          <p className="flex-1 flex">Dentist Name</p>
          <p className="flex-1 flex ">No. of bookings</p>
          <p className="flex-1 flex ">Action</p>
        </div>
        {
          data?.map((data, index) => <ReportTableRow key={index} row={data} />
          )
        }
      </div>
    </div>
  )
}

export default Reports