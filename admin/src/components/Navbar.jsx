import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const { aToken, setAToken } = useContext(AdminContext);

  const navigate = useNavigate();

  const logout = () => {
    navigate('/')
    aToken && setAToken('')
    aToken && localStorage.removeItem('aToken')
  }

  return (
    <div className="flex h-16 justify-between items-center px-6 sm:px-12 py-4 bg-white shadow-sm border-b">

      <div className="flex items-center gap-3">
        <img
          className="w-32 sm:w-36 cursor-pointer transition-transform duration-300 hover:scale-105"
          src={assets.admin_logo}
          alt="Admin Logo"
        />

        <span className="text-xs sm:text-sm font-medium px-3 py-1 rounded-full 
    bg-primary/20 text-gray-700 border border-primary/30">
          {aToken ? 'Admin' : 'Doctor'}
        </span>
      </div>

      <button
        onClick={logout}
        className="px-6 py-2 text-sm font-medium rounded-full 
        bg-primary text-white shadow-md ease-in-out hover:scale-105
        hover:bg-primary/90 hover:shadow-lg hover:shadow-lg
        active:scale-95 transition-all duration-300"
      >
        Logout
      </button>

    </div>
  )
}

export default Navbar