import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className="w-[20%] h-full border-r-2 border-charcoalGray absolute top-0 left-0">
      <div className="py-5  flex items-center justify-center">LOGO</div>
      <div className="flex flex-col pl-8 gap-1 py-3 text-sm">
        <Link to="/" className="flex gap-2 items-center "> <p className="w-3 h-3  border-2 border-charcoalGray"></p> Dashboard</Link>
        <Link to="/services" className="flex gap-2 items-center "><p className="w-3 h-3  border-2 border-charcoalGray"></p>Add Services</Link>
        <Link to="/reports" className="flex gap-2 items-center "><p className="w-3 h-3  border-2 border-charcoalGray"></p>View Report</Link>
        <Link to="/dentist" className="flex gap-2 items-center "><p className="w-3 h-3  border-2 border-charcoalGray"></p>Add Dentist</Link>
      </div>
    </div>
  )
}

export default Sidebar