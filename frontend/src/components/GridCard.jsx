import React, { useState } from 'react'
import codeImg from '../images/html.png'
import deleteImg from '../images/delete.png'
import { useNavigate } from 'react-router-dom';

const GridCard = ({item}) => {

  return (
    <>
      <div className="gridCard bg-[#f4f4f4] w-[270px] p-[10px] h-[126px] cursor-pointer hover:bg-[#e8e8e8] rounded-lg ">
       <div onClick={()=>{navigate(`/editior/${item._id}`)}}>
        <img className="w-[50px]" src={codeImg} alt="" />
        <h3 className='text-[20px] w-[90%] line-clamp-1 text-black'>Example Project</h3>
       </div>
        <div className='flex items-center justify-between'>
          <p className='text-[14px] text-[gray]'>Created on 21-12-2024</p>
          <img  className='w-[20px] cursor-pointer' src={deleteImg} alt="" />
        </div>
      </div>

      

    </>
  )
}

export default GridCard