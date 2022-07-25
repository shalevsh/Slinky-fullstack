const express = require("express");
const { createBooking, getAllBookings, getBookingsOfUser, deleteBooking, updateBooking } = require('./bookingFunctions');
const bookingRouter = express.bookingRouter();

bookingRouter.post("/create-booking", createBooking);
bookingRouter.get("/get-all-booking", getAllBookings);
bookingRouter.get('/get-bookings-of-user', getBookingsOfUser);
bookingRouter.delete('/delete-booking', deleteBooking);
bookingRouter.post('/update-booking', updateBooking);

module.exports = bookingRouter;