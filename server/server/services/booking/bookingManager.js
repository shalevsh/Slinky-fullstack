const BookingManagerValidator = require('./bookingManagerValidation');

class BookingManager{
    constructor(){
        this.bookingManagerValidator = new BookingManagerValidator();
    }
    async addBookingOrder(bookingInformation){
        if(this.bookingManagerValidator.isBookingInformationValid(bookingInformation)){
            throw error("In the time"); //need to choose what to do here
        }
        try{
            const bookOrder = await this.bookingDatabase.addBooking(bookingInformation);
            return bookOrder;
        } catch(error){
            throw error;
        }
    }
    async getBookings(){
        return await this.bookingDatabase.getAllBookings();
    }
}

module.exports = new BookingManager();