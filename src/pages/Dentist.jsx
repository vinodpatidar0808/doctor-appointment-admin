import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Input from "../components/Input"
import { emailRegex, mobileRegex, showToastMessage } from "../utils"

const Dentist = () => {
  const navigate = useNavigate()
  const [dentist, setDentist] = useState({ name: "", phone: "", email: "", password: "", username: "", gender: "", hourlyRate: "" })

  const handleChange = (e) => {
    if (e.target.name !== "hourlyRate") {
      setDentist(curr => ({ ...curr, [e.target.name]: e.target.value }))
      return
    }

    if (e.target.name === "hourlyRate" && (parseInt(e.target.value) > 0 || e.target.value === "")) {
      setDentist(curr => ({ ...curr, [e.target.name]: parseInt(e.target.value) }))
    }
  }

  const reset = () => {
    setDentist({ name: "", phone: "", email: "", password: "", username: "", gender: "", hourlyRate: "" })
  }

  const disableSubmitButton = () => {
    return (!dentist.name || !dentist.phone || !mobileRegex.test(dentist.phone) || !dentist.email || !emailRegex.test(dentist.email) || !dentist.password || dentist.password.length < 6 || !dentist.username || dentist.username.length < 3 || !dentist.hourlyRate || !dentist.gender)
  }

  const handleAddDentist = async () => {
    // TODO: implement this function
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_BASE_URL}/admin/adddentist`, dentist, {
        headers: {
          'Authorization': `${sessionStorage.getItem('authToken')}`
        }
      })
      if (data.success) {
        showToastMessage('SUCCESS', data.message)
        setDentist({ name: "", phone: "", email: "", password: "", username: "", gender: "", hourlyRate: "" })
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
    <>
      <div className="px-8 flex flex-wrap gap-8 w-full">
        <Input type="text" name={"name"} label={'Full Name'} value={dentist.name} handleChange={handleChange} className={"w-[40%]"} />
        <Input type="email" name={"email"} label={'Email'} value={dentist.email} handleChange={handleChange} className={"w-[40%]"} />

        <Input type="text" name={"phone"} label={'Mobile No.'} value={dentist.phone} handleChange={handleChange} className={"w-[40%]"} />

        {/* check box for gender */}

        <div className={`flex flex-col gap-2 w-[40%]  text-xs `}>
          <p >Gender</p>
          <div className="flex gap-1 w-full justify-between">
            <div className="flex  justify-center items-center gap-2">
              <input type="radio" name="gender" value="male" checked={dentist.gender === "male"} onChange={handleChange} />
              <label >Male</label>
            </div>
            <div className="flex  justify-center items-center gap-2">
              <input type="radio" name="gender" value="female" checked={dentist.gender === "female"} onChange={handleChange} />
              <label >Female</label>
            </div>
            <div className="flex  justify-center items-center gap-2">
              <input type="radio" name="gender" value="other" checked={dentist.gender === "other"} onChange={handleChange} />
              <label >Other</label>
            </div>
          </div>
          {/* <input type={} className="px-2 py-2 outline-none border-2 rounded-[8px] border-softGray " name={name} value={value} onChange={handleChange} /> */}
        </div>

        <Input type="number" name={"hourlyRate"} label={'Hourly Rate'} value={dentist.hourlyRate} handleChange={handleChange} className={"w-[40%]"} />

        <Input type="text" name={"username"} label={'Username'} value={dentist.username} handleChange={handleChange} className={"w-[40%]"} />
        <Input type="password" name={"password"} label={'Password'} value={dentist.password} handleChange={handleChange} className={"w-[40%]"} />
      </div>


      <div className="flex justify-between w-[40%] mt-5 px-8 ">
        <button className="border-2  px-3 py-2 rounded-md text-sm outline-none" onClick={reset}>Cancel</button>
        <button className="border-2  px-3 py-2 rounded-md text-sm bg-softGray outline-none disabled:bg-charcoalGray disabled:text-white" disabled={disableSubmitButton()} onClick={handleAddDentist}>Add Service</button>
      </div>
    </>
  )
}

export default Dentist