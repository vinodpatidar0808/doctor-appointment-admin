
const Login = () => {
  return (
    <main className="flex w-screen h-screen items-center text-[#616161] justify-center">
      <div className="flex flex-col w-1/3 gap-3 p-5 border shadow-md rounded-md items-center">
        <div className="mb-3"> LOGO</div>
        <div className="flex flex-col gap-1 w-full text-xs ">
          <label htmlFor="" >Username</label>
          <input type="text" className="px-2 py-2 outline-none border-2 rounded-[8px] border-text1 " name='username' value={''} onChange={() => { }} />
        </div>
        <div className="flex flex-col gap-1 w-full text-xs ">
          <label htmlFor="" >Password</label>
          <input type="password" className="px-2 py-2 outline-none border-2 rounded-[8px] border-text1 " name='password' value={''} onChange={() => { }} />
        </div>
        <button className="w-full p-2 bg-text1 rounded-md mt-3 ">Login</button>

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