import express from 'express'
import { adminDashboard, adminSignIn, employeeDetails } from '../controllers/adminController.js'

const router = express.Router()

router.get('/dashboard', adminDashboard)
router.get('/employee-details/:id', employeeDetails)

router.post('/signIn', adminSignIn)


export default router