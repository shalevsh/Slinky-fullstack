const { Booking } = require('../../storages/models');

class BookingDatabaseManage {

    getAllBookings = async () => {
    try {
      const data = await Booking.findAll();
      return data;
    } catch (error) {
      throw error;
    }
  };
  getBookingsOfUser = async (userName) => {
    try {
        const data = await Booking.findAll({where:{userName}});
        return data;
      } catch (error) {
        throw error;
      }
  }
  addBooking = async (officeId, bookingPlace, userName, startDate, endDate) => {
    try {
        return await Booking.create({officeId, bookingPlace, userName, startDate, endDate});
    } catch (error) {
      throw error;
    }
  };
  deleteBooking = async (bookingId, officeId, userName) => {
    try {
      return await Booking.destroy({where:{id:bookingId, officeId, userName}});
    } catch (error) {
      throw error;
  }
  };
  deleteAllBookings = async () => {
    try {
      return await Booking.truncate();
    } catch(error) {
      throw error;
    }
  };
  updateBooking = async (bookingId, officeId, bookingPlace, userName, startDate, endDate) => {
    try{
      return await Booking.update({officeId, bookingPlace, userName, startDate, endDate},
        {where:{id:bookingId}});
    } catch(error){
      throw error;
    }
  };
  getBookingByPlaceArea = async (bookingPlace) => {
    try{
      return await Booking.findAll({where:{bookingPlace}});
    } catch(error){
      throw error;
    }
  }
  getBookingByDateAndPlace = async (officeId, bookingPlace, startDate, endDate) => {
    try{
      const bookingByChairAndDate = Booking.findAll({where:{officeId, bookingPlace, startDate}});
      return bookingByChairAndDate;
    } catch(error){
      throw error;
    }
  }
}

module.exports = BookingDatabaseManage;