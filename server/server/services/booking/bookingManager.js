const BookingManagerValidator = require("./bookingManagerValidation");
const BookingDatabaseManage = require("./bookingDatabaseManage");

class BookingManager {
  constructor() {
    this.bookingManagerValidator = new BookingManagerValidator();
    this.bookingDatabase = new BookingDatabaseManage();
  }
  async addBookingOrder(bookingInformation, userName) {
    if (
      this.bookingManagerValidator.isBookingInformationValid(
        bookingInformation
      ) === false
    ) {
      throw error("In the time"); //need to choose what to do here
    }
    const { officeId, bookingPlace, bookingFloor, startDate, endDate } = bookingInformation;
    const bookOrder = await this.bookingDatabase.addBooking(officeId, bookingPlace, bookingFloor, userName, startDate, endDate);
    return bookOrder;
  }
  async getBookingsOfUser(userName) {
    return await this.bookingDatabase.getBookingsOfUser(userName);
  }
  async getAllBookings() {
    return await this.bookingDatabase.getAllBookings();
  }
  async deleteBooking(bookingId, officeId) {
    await this.bookingDatabase.deleteBooking(bookingId, officeId);
  }
  async updateBooking(bookingInformation, userName) {
    if (this.bookingManagerValidator.isBookingInformationValid(bookingInformation) === false) {
      throw error("In the time"); //need to choose what to do here
    }
    await this.bookingDatabase.updateBooking(bookingInformation, userName);
  }
}

module.exports = new BookingManager();
