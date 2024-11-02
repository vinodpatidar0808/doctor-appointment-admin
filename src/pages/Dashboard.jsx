import TableRow from "../components/TableRow"

const dummyData = [
  {
    date: '2023-01-01',
    patientName: 'John Doe',
    dentistName: 'Dr. Smith',
    serviceRequested: 'Cavity Removal'
  },
  {
    date: '2023-01-02',
    patientName: 'Jane Smith',
    dentistName: 'Dr. Johnson',
    serviceRequested: 'Teeth Whitening'
  },
  {
    date: '2023-01-03',
    patientName: 'Bob Johnson',
    dentistName: 'Dr. Davis',
    serviceRequested: 'Root Canal'
  },
  {
    date: '2023-01-04',
    patientName: 'Alice Smith',
    dentistName: 'Dr. Wilson',
    serviceRequested: 'Teeth Whitening'
  },
  {
    date: '2023-01-05',
    patientName: 'John Doe',
    dentistName: 'Dr. Smith',
    serviceRequested: 'Cavity Removal'
  },
  {
    date: '2023-01-06',
    patientName: 'Jane Smith',
    dentistName: 'Dr. Johnson',
    serviceRequested: 'Teeth Whitening'
  },
  {
    date: '2023-01-07',
    patientName: 'Bob Johnson',
    dentistName: 'Dr. Davis',
    serviceRequested: 'Root Canal'
  },
  {
    date: '2023-01-08',
    patientName: 'Alice Smith',
    dentistName: 'Dr. Wilson',
    serviceRequested: 'Teeth Whitening'
  },
  {
    date: '2023-01-09',
    patientName: 'John Doe',
    dentistName: 'Dr. Smith',
    serviceRequested: 'Cavity Removal'
  },
  {
    date: '2023-01-10',
    patientName: 'Jane Smith',
    dentistName: 'Dr. Johnson',
    serviceRequested: 'Teeth Whitening'
  },
  {
    date: '2023-01-11',
    patientName: 'Bob Johnson',
    dentistName: 'Dr. Davis',
    serviceRequested: 'Root Canal'
  },
  {
    date: '2023-01-12',
    patientName: 'Alice Smith',
    dentistName: 'Dr. Wilson',
    serviceRequested: 'Teeth Whitening'
  },
]


const Dashboard = () => {
  return (
    <div className="">
      <div className="text-gray-900 text-sm w-full flex justify-end mb-2 px-8">View All </div>
      <div className="w-full flex flex-col ">
        <div className="w-full bg-warmLightGray flex justify-between  px-8 py-2 mb-2 ">
          <p className="flex-1  ">Appointment Date</p>
          <p className="flex-1 flex bg-red-200">Patient Name</p>
          <p className="flex-1 flex bg-green-300 ">Dentist Name</p>
          <p className="flex-1 flex bg-green-500">Service Requested</p>
        </div>
        {
          dummyData.map((data, index) => <TableRow key={index} row={data} />
          )
        }

      </div>

    </div>
  )
}

export default Dashboard
