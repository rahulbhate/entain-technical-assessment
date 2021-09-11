import React from 'react'
{
  /* 
    Footer common component 
  */
}
const Footer = ({ ...props }) => {
  return (
    <>
      <div className="dashboard-footer mt-4">
        <div className="text-body text-center" id="footerstyle">
          © {new Date().getFullYear()} Entain. All rights reserved.
        </div>
      </div>
    </>
  )
}

export default Footer
