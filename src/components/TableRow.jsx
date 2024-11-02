
const TableRow = ({row}) => {
  return (
    <div className="px-8 py-2 flex ">
      <p className="flex-1 ">{row.date}</p>
      <p className="flex-1 ">{row.patientName}</p>
      <p className="flex-1 ">{row.dentistName}</p>
      <p className="flex-1 ">{row.serviceRequested}</p>
    </div>
  )
}

export default TableRow