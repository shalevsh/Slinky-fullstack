const express = require("express");
const { createBooking } = require('./bookingFunctions');
const router = express.Router();

router.post("/book", createBooking);