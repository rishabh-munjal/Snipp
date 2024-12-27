import React from 'react'
import logo from "../images/logo.png"


const EditiorNavbar = () => {
  return (
    <>
      <div className="EditiorNavbar flex items-center justify-between px-8 py-4 bg-gradient-to-r from-sky-500 to-green-500 shadow-lg">
        <div className="logo">
          <img className='w-[60px] cursor-pointer' src={logo} alt="" />
        </div>
        <p>File / <span className='text-[gray]'>My first project</span></p>
        <i className='p-[8px] btn bg-black rounded-[5px] cursor-pointer text-[20px]'>Download</i>
      </div>
    </>
  )
}

export default EditiorNavbar