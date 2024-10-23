import React, { useEffect } from 'react'
import { useContext } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'

const DocDashboard = () => {

  const {dToken, dashData, setDashData, getDashData, markAppointmentCompleted, markAppointmentCancel} = useContext(DoctorContext)
  const {currency, slotDateFormat} = useContext(AppContext)

  useEffect(()=>{
    if (dToken) {
      getDashData()
    }
  },[dToken])

  return dashData && (
    <div className='m-5'>

      <div className='flex flex-wrap gap-3'>

        <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-gray-100 cursor-pointer hover:scale-105 hover:shadow-lg transition-all'>
          <img className='w-14' src={assets.earning_icon} alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-600'>{currency} {dashData.earnings}</p>
            <p className='text-gray-400'>Earnings</p>
          </div>
        </div>

        <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-gray-100 cursor-pointer hover:scale-105 hover:shadow-lg transition-all'>
          <img className='w-14' src={assets.appointments_icon} alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-600'>{dashData.appointments}</p>
            <p className='text-gray-400'>Appointments</p>
          </div>
        </div>

        <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-gray-100 cursor-pointer hover:scale-105 hover:shadow-lg transition-all'>
          <img className='w-14' src={assets.patients_icon} alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-600'>{dashData.patients}</p>
            <p className='text-gray-400'>Patients</p>
          </div>

        </div>

      </div>

      <div className='bg-white'>

        <div className='flex items-center gap-2.5 px-4 py-4 mt-10 rounded-t border'>
          <img src={assets.list_icon} />
          <p className='font-semibold'>Latest Appointments</p>
        </div>

        <div className='pt-4 border border-t-0'>
          {
            dashData.latestAppointments.map((item,index)=>(
              <div key={index} className='flex items-center gap-3 px-6 py-3 hover:bg-gray-100'>
                <img className='w-10 rounded-full' src={item.userData.image} />
                <div className='flex-1 text-sm'>
                  <p className='text-gray-800 font-medium'> {item.userData.name} </p>
                  <p className='text-gray-600'> {slotDateFormat(item.slotDate)} | {item.slotTime} </p>
                </div>
                {
                item.cancelled
                ? <p className='text-red-500 text-xs font-medium'>Cancelled</p>
                : item.isCompleted
                  ? <p className='text-green-500 text-xs font-medium'>Completed</p>
                  : <div className='flex'>
                      <img onClick={()=>markAppointmentCompleted(item._id)} className='w-10 cursor-pointer' src={assets.tick_icon} alt="" />
                      <img onClick={()=>markAppointmentCancel(item._id)} className='w-10 cursor-pointer' src={assets.cancel_icon} alt="" />
                    </div>
              }
              </div>
            ))
          }
        </div>

      </div>

    </div>
  )
}

export default DocDashboard