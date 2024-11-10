
const ReportTableRow = ({row}) => {
  return (
    <div className="px-8 py-2 flex items-center ">
      <p className="flex-1 ">{row.startDate.split('/').reverse().join('-')}</p>
      <p className="flex-1 ">{row.dentistName}</p>
      <p className="flex-1 ">{row.totalBookings}</p>
      <button  className="flex-1 px-3 rounded-md py-1 bg-softGray max-w-fit  ">View</button>
    </div>
  )
}

export default ReportTableRow