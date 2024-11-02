
const Navbar = () => {
  return (
    <nav className="flex items-center justify-end  border-b-2 border-charcoalGray sticky top-0 text-charcoalGray px-8 py-5  w-full">
      {/* TODO: make border take full height if time permits */}
      {/* <div className="w-[15%] border-r-2 divide-y border-charcoalGray">
        <p className="">LOGO</p>
      </div> */}
      <div className="flex  gap-3">
        <p>Admin</p>
        <p className="w-6 h-6 rounded-full bg-softGray"></p>
      </div>
    </nav>
  )
}

export default Navbar

