import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import AllAppointments from './pages/Admin/AllAppointments';
import Dashboard from './pages/Admin/Dashboard';
import AddDoctor from './pages/Admin/AddDoctor';
import DoctorsList from './pages/Admin/DoctorsList';
import { DoctorContext } from './context/DoctorContext';
import DocDashboard from './pages/Doctor/DocDashboard';
import DocAppointment from './pages/Doctor/DocAppointment';
import DocProfile from './pages/Doctor/DocProfile';

const App = () => {

  const {aToken} = useContext(AdminContext)
  const {dToken} = useContext(DoctorContext)

  return aToken || dToken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer/>
      <Navbar/>
      <div className='flex items-start'>
        <Sidebar/>
        <Routes>
          <Route>
            {/* Admin Routes */ }
            <Route path="/" element={<></>} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/appointments" element={<AllAppointments/>} />
            <Route path="/add-doctor" element={<AddDoctor/>} />
            <Route path="/doctors-list" element={<DoctorsList/>} />

            {/* Doctor Routes */}
            <Route path="/doctor-dashboard" element={<DocDashboard/>} />
            <Route path="/doctor-appointments" element={<DocAppointment/>} />
            <Route path="/doctor-profile" element={<DocProfile/>} />
          </Route>
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login/>
      <ToastContainer/>
    </>
  )
}

export default App