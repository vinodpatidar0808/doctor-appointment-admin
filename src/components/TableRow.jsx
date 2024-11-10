
const TableRow = ({row}) => {
  return (
    <div className="px-8 py-2 flex ">
      <p className="flex-1 ">{row.startDate.split('/').reverse().join('-')}</p>
      <p className="flex-1 ">{row.userName}</p>
      <p className="flex-1 ">{row.dentistName}</p>
      <p className="flex-1 ">{row.serviceName}</p>
    </div>
  )
}

export default TableRow