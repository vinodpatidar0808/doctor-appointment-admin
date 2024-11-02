import axios from "axios"
import { useState } from "react"

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" })

  const handleChange = (e) => {
    setUser(curr => ({ ...curr, [e.target.name]: e.target.value }))
  }

  const handleLogin = async () => {
    axios.post(`${import.meta.env.VITE_BACKEND_BASE_URL}/admin/login`,
      user
    )
  }

  console.log("username, password: ", user.username, user.password)

  return (
    <main className="flex w-screen h-screen items-center text-charcoalGray  justify-center">
      <div className="flex flex-col w-1/4 gap-3 p-5 border shadow-md rounded-md items-center">
        <div className="mb-3"> LOGO</div>
        <div className="flex flex-col gap-1 w-full text-xs ">
          <label htmlFor="" >Username</label>
          <input type="text" className="px-2 py-2 outline-none border-2 rounded-[8px] border-softGray " name='username' value={user.username} onChange={handleChange} />
        </div>
        <div className="flex flex-col gap-1 w-full text-xs ">
          <label htmlFor="" >Password</label>
          <input type="password" className="px-2 py-2 outline-none border-2 rounded-[8px] border-softGray " name='password' value={user.password} onChange={handleChange} />
        </div>

        <button className="w-full p-2 bg-softGray rounded-md mt-3 disabled:bg-gray-400 disabled:text-white " disabled={!user.username || !user.password} onClick={handleLogin}>Login</button>

        <div className="flex justify-between w-full"
        >
          <p className="text-xs underline ">Forgot Password</p>
          {/* <p className="text-xs underline  ">Sign up</p> */}
        </div>
      </div>
    </main>
  )
}



export default Login