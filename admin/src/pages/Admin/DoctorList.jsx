import React from 'react'
import { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { useEffect } from 'react';

const DoctorList = () => {

const {doctors, aToken, getAllDoctors} = useContext(AdminContext)

useEffect(()=> {
  if(aToken) {
    getAllDoctors()
  }
}, [aToken])

  return (
    <div>
      <h1>All Doctors</h1>
      <div>
        {
          doctors.map((item, index)=> (
            <div key={index}>
              <img src={item.image} alt="" />
              <div>
                <p>{item.image}</p>
                <p>{item.speciality}</p>
                <div>
                  <input type="checkbox" checked={item.available} />
                  <p>Available</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default DoctorList