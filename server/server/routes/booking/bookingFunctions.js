const BookingManager = require('../../services/booking/bookingManager');

async function createBooking(req, res, next){
    try{
        const returnedBooking = await BookingManager.addBookingOrder(req.body.bookingInformation);
        res.status(200).send(JSON.stringify(returnedBooking));
        res.end();
    } catch(error){
        // next(error);
    }
}

async function getAllBookings(req, res, next){
    try{
        const listToReturn = await BookingManager.getAllBookings();
        res.status(200).send(JSON.stringify(listToReturn));
    } catch(error){
        // next(error);
    }
}

async function getBookingsOfUser(req, res, next){
    try{
        const listToReturn = await BookingManager.getBookingsOfUser(req.body.user.userName);
        res.status(200).send(JSON.stringify(listToReturn));
    } catch(error){
        // next(error);
    }
}

async function deleteBooking(req, res, next){
    try{
        const listToReturn = await BookingManager.deleteBooking(req.body.bookingId, req.body.officeId);
        res.status(200).send(JSON.stringify(listToReturn));
    } catch(error){
        // next(error);
    }
}

async function updateBooking(req, res, next){
    try{
        const listToReturn = await BookingManager.updateBooking(req.body.bookingInformation);
        res.status(200).send(JSON.stringify(listToReturn));
    } catch(error){
        // next(error);
    }
}

async function getBookingByBookingPlace(req, res, next){
    try{
        const listToReturn = await BookingManager.getBookingByPlaceArea(req.body.bookingPlace);
        console.log(listToReturn);
        res.status(200).send(JSON.stringify(listToReturn));
    } catch(error){
        // next(error);
    }
}

async function getBookingByDateAndPlace(req, res, next){
    try{
        const { officeId, bookingPlace, startDate, endDate } = req.body;
        const listOfBookings = await BookingManager.getBookingByDateAndPlace(officeId, bookingPlace, startDate, endDate);
        const bookedHours = listOfBookings.map((bookingOrder) => {
            return ({"startHour" : bookingOrder.startDate.getUTCHours(),
                     "endHour": bookingOrder.endDate.getUTCHours()});
        })
        res.status(200).send(JSON.stringify(bookedHours));
    } catch(error){
        // next(error);
    }
}

module.exports = {
    createBooking,
    getAllBookings,
    getBookingsOfUser,
    deleteBooking,
    updateBooking,
    getBookingByBookingPlace,
    getBookingByDateAndPlace
}

let endDate = "2022-07-25";
let startDate = "2022-07-25";

const bookingInformation = {
    officeId:"1",
    bookingPlace: "c5", 
    userName:"viko",
    startDate:new Date(startDate) ,
    endDate:new Date(new Date(endDate).getTime() + 60 * 60 * 22 * 1000 - 1)
    }
const req = {body:{"bookingInformation":bookingInformation}}
const req2 = {body:{"officeId":1, "bookingPlace":"c5", startDate:new Date(endDate),
endDate:new Date(endDate).getTime() + 60 * 60 * 24 * 1000 - 1}}
// createBooking(req);
getBookingByDateAndPlace(req2);