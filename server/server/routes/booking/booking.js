const express = require("express");
const auth = require('../users');
const { createBooking, getAllBookings, getBookingsOfUser, deleteBooking, updateBooking, getBookingByBookingPlace, getBookingByDateAndPlace } = require('./bookingFunctions');
const bookingRouter = express.Router();

bookingRouter.post("/create-booking", [auth] ,createBooking);
bookingRouter.get("/get-all-booking", getAllBookings);
bookingRouter.get('/get-bookings-of-user', [auth], getBookingsOfUser);
bookingRouter.delete('/delete-booking', [auth], deleteBooking);
bookingRouter.post('/update-booking', [auth], updateBooking);
bookingRouter.get('/get-booking-by-bookingPlace', getBookingByBookingPlace); //probably will be remove
bookingRouter.get('/get-all-booking-by-date-and-place', [auth], getBookingByDateAndPlace);
module.exports = bookingRouter;