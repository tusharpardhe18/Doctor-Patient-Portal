import express from 'express'
import {doctorList, editDocProfile, getDashData, getDocAppointments, getDocProfile, loginDoc, markAppointmentCancel, markAppointmentCompleted} from '../controllers/doctorController.js'
import authDoc from '../middleware/authDoc.js'

const doctorRouter = express.Router()

doctorRouter.get('/list', doctorList)
doctorRouter.post('/login', loginDoc)
doctorRouter.get('/appointments', authDoc, getDocAppointments)
doctorRouter.post('/complete-appointment', authDoc, markAppointmentCompleted)
doctorRouter.post('/cancel-appointment', authDoc, markAppointmentCancel)
doctorRouter.get('/dashboard', authDoc, getDashData)
doctorRouter.get('/profile', authDoc, getDocProfile)
doctorRouter.post('/update-profile', authDoc, editDocProfile)

export default doctorRouter