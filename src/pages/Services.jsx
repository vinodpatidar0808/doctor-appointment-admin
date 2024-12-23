import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { showToastMessage } from "../utils"

const Services = () => {
  const navigate = useNavigate()
  const [service, setService] = useState({ name: "", price: "" })
  const handleChange = (e) => {
    if (e.target.name === "price" && (parseInt(e.target.value) > 0 || e.target.value === "")) {
      setService(curr => ({ ...curr, [e.target.name]: parseInt(e.target.value) }))
    } else if (e.target.name === "name") {
      setService(curr => ({ ...curr, [e.target.name]: e.target.value }))
    }
  }

  const handleAddService = async () => {
    // TODO: implement this function
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_BASE_URL}/admin/addservice`, service, {
        headers: {
          'Authorization': `${sessionStorage.getItem('authToken')}`
        }
      })

      if (data.success) {
        showToastMessage('SUCCESS', data.message)
        setService({ name: "", price: "" })
        return
      } else {
        showToastMessage('ERROR', data.message)
      }

    } catch (error) {
      console.log(error)
      showToastMessage('ERROR', error.response.data.message)
      if (error.response.status === 401) {
        sessionStorage.removeItem('authToken')
        navigate('/login')
      }
    }


  }


  return (
    <div className="px-8 flex flex-col gap-3 w-[40%]">
      <div className="flex flex-col gap-1  text-xs ">
        <label htmlFor="" >Service Name</label>
        <input type="text" className="px-2 py-2 outline-none border-2 rounded-[8px] border-softGray " name='name' value={service.name} onChange={handleChange} />
      </div>
      <div className="flex flex-col gap-1  text-xs ">
        <label htmlFor="" >Price of the service</label>
        <input type="number" min={0} className="px-2 py-2 outline-none border-2 rounded-[8px] border-softGray " name='price' value={service.price} onChange={handleChange} />
      </div>

      <div className="flex justify-between w-full mt-3">
        <button className="border-2  px-3 py-2 rounded-md text-sm outline-none" onClick={() => setService({ name: "", price: "" })}>Cancel</button>
        <button className="border-2  px-3 py-2 rounded-md text-sm bg-softGray outline-none disabled:bg-charcoalGray disabled:text-white" disabled={!service.name || !service.price} onClick={handleAddService}>Add Service</button>
      </div>
    </div>
  )
}

export default Services