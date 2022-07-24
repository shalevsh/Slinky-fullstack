const BookingManager = require('../../services/booking/bookingManager');

async function createBooking(req, res, next){
    try{
        const returnedBooking = await BookingManager.addBookingOrder(req.bookingInformation);
        res.status(200).send(JSON.stringify(returnedBooking));
        res.end();
    } catch(error){
        next(error);
    }
}

async function getAllBooking(req, res, next){
    try{
        const listToReturn = await BookingManager.getBookings();
        res.status(200).send(JSON.stringify(listToReturn));
    } catch(error){
        next(error);
    }
}

module.exports = {
    createBooking,
    getAllBooking
}