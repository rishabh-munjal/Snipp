import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import GridCard from '../components/GridCard';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [userData, setUserData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCreateModelShow, setIsCreateModelShow] = useState(false);

  useEffect(() => {
    // Fetch user data or any other necessary data here
    // Example:
    // setUserData({ username: 'JohnDoe' });
  }, []);

  return (
    <>
      <Navbar />
      <div className='flex items-center justify-between px-[100px] my-[40px]'>
        {/* <h2 className='text-2xl text-black'>Hi, {userData ? userData.username : "Rishabh"} 👋</h2> */}
        <div className='flex items-center gap-1'>
          {/* Search Bar */}
          <div className="inputBox !w-[350px]">
            <input
              type="text"
              placeholder='Search Code Snippets'
              value={searchQuery} // Bind search input to searchQuery state
              onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery on input change
            />
          </div>
          <button onClick={() => { setIsCreateModelShow(true) }} className='bg-slate-300 rounded-[5px] mb-4 text-[22px] !p-[5px] !px-[10px]'>🔍</button>
        </div>
      </div>

      {/* Project Display */}
      <div className="cards  px-[100px] grid grid-cols-4 gap-4">
        <GridCard/>
        <GridCard/>
        <GridCard/>
        <GridCard/>
        <GridCard/>
      </div>
    </>
  );
}

export default Home;