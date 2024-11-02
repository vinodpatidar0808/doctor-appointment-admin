export const getPageHeader = (pathname) => {
  if(pathname === "/") {
    return "Dashboard"
  }

  if(pathname === "/services") {
    return "Add Services" 
  }

  if(pathname === "/reports") {
    return "View Report"
  }

  if(pathname === "/dentist") {
    return "Add Dentist"
  }

}