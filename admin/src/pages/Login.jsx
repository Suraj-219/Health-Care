import React, { useContext, useState } from 'react'
import { AdminContext } from '../context/AdminContext';
import {assets} from '../assets/assets';
import axios from 'axios';
import {toast} from 'react-toastify';

const Login = () => {

  const [state, setState] = useState('Admin');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {setAToken, backendUrl} = useContext(AdminContext);

  const onSubmitHandler = async (event) => {

    event.preventDefault()

    try {

      if(state === 'Admin') {

        const {data} = await axios.post(backendUrl + '/api/admin/login', {email,password});
        if(data.success) {
          localStorage.setItem('aToken', data.token)
          setAToken(data.token)
        } else {
          toast.error(data.message)
        }

      } else {

      }

    } catch(error) {

    }

  }

  return (
    <form onSubmit={onSubmitHandler} className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">

      <div className="flex flex-col gap-4 p-8 w-[340px] sm:w-[380px] bg-white/90 backdrop-blur border border-gray-200 rounded-2xl shadow-xl">

        <p className="text-2xl font-bold text-center text-gray-700">
          <span className="text-primary">{state}</span> Login
        </p>

        <div className="w-full">
          <label className="text-sm font-medium">Email</label>
          <input onChange={(e)=>setEmail(e.target.value)} value={email}
            type="email"
            required
            placeholder={
              state === 'Admin'
                ? 'admin@example.com'
                : 'doctor@example.com'
            }
            className="w-full mt-1 px-3 py-2 border rounded-lg outline-none 
            focus:ring-2 focus:ring-primary/40 focus:border-primary
            transition"
          />
        </div>

        <div className="w-full">
          <label className="text-sm font-medium">Password</label>
          <input onChange={(e)=>setPassword(e.target.value)} value={password}
            type="password"
            required
            placeholder="••••••••"
            className="w-full mt-1 px-3 py-2 border rounded-lg outline-none 
            focus:ring-2 focus:ring-primary/40 focus:border-primary
            transition"
          />
        </div>

        <button
          className="w-full py-2 rounded-md text-base font-medium
          bg-primary text-white
          hover:bg-primary/90
          focus:ring-2 focus:ring-primary/40
          transition"
        >
          Login
        </button>

        <p className="text-center text-sm mt-2">
          {state === 'Admin' ? 'Doctor Login' : 'Admin Login'}{' '}
          <span
            onClick={() =>
              setState(state === 'Admin' ? 'Doctor' : 'Admin')
            }
            className="text-primary font-medium cursor-pointer hover:underline"
          >
            Click here
          </span>
        </p>

      </div>
    </form>
  )
}

export default Login