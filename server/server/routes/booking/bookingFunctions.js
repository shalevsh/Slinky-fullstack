const BookingManager = require('../../services/booking/bookingManager');

async function createBooking(req, res, next){
    try{
        const returnedBooking = await BookingManager.addBookingOrder(req.body.bookingInformation);
        res.status(200).send(JSON.stringify(returnedBooking));
        res.end();
    } catch(error){
        next(error);
    }
}

async function getAllBookings(req, res, next){
    try{
        const listToReturn = await BookingManager.getAllBookings();
        res.status(200).send(JSON.stringify(listToReturn));
    } catch(error){
        next(error);
    }
}

async function getBookingsOfUser(req, res, next){
    try{
        const listToReturn = await BookingManager.getBookingsOfUser(req.body.user.userName);
        res.status(200).send(JSON.stringify(listToReturn));
    } catch(error){
        next(error);
    }
}

async function deleteBooking(req, res, next){
    try{
        const listToReturn = await BookingManager.deleteBooking(req.body.bookingId, req.body.officeId);
        res.status(200).send(JSON.stringify(listToReturn));
    } catch(error){
        next(error);
    }
}

async function updateBooking(req, res, next){
    try{
        const listToReturn = await BookingManager.updateBooking(req.body.bookingInformation);
        res.status(200).send(JSON.stringify(listToReturn));
    } catch(error){
        next(error);
    }
}

module.exports = {
    createBooking,
    getAllBookings,
    getBookingsOfUser,
    deleteBooking,
    updateBooking
}

const bookingInformation = {
    officeId:"1",
    bookingPlace: "", 
    bookingFloor:"1", 
    userName:"viko",
    startDate:null ,
    endDate:null
    }
const req = {body:{"officeId":1, bookingId:1}}

deleteBooking(req);