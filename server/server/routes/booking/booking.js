const express = require("express");
const { createBooking, getAllBookings, getBookingsOfUser, deleteBooking, updateBooking, getBookingByBookingPlace, getBookingByDateAndPlace } = require('./bookingFunctions');
const bookingRouter = express.Router();

bookingRouter.post("/create-booking", createBooking);
bookingRouter.get("/get-all-booking", getAllBookings);
bookingRouter.get('/get-bookings-of-user', getBookingsOfUser);
bookingRouter.delete('/delete-booking', deleteBooking);
bookingRouter.post('/update-booking', updateBooking);
bookingRouter.get('/get-booking-by-bookingPlace', getBookingByBookingPlace);
bookingRouter.get('/get-all-booking-by-date-and-place', getBookingByDateAndPlace);
module.exports = bookingRouter;