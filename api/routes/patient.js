const express = require('express')
const router = express.Router()
const authControllers = require('../controllers/patient/auth')
const doctorControllers = require('../controllers/patient/doctor')

router.post('/create-account', authControllers.patientRegistration)
router.get('/logged-patient', authControllers.loggedPatient)

router.get('/all-doctor', doctorControllers.allDoctor)
router.get('/single-doctor', doctorControllers.singleDoctor)



module.exports = router