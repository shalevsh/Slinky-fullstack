class BookingManagerValidator{
    constructor(){}
    isBookingInformationValid(bookingInformation){
        const { officeId, bookingPlace, bookingFloor, startDate, endDate } = bookingInformation;
        if(this._isNotNumber(officeId)) return false;
        if(this._isBookingPlaceNotValid(bookingPlace)) return false;
        if(this._isNotNumber(bookingFloor)) return false;
        if(this._isDateTimeNotValid(startDate)) return false;
        if(this._isDateTimeNotValid(endDate)) return false;
        return true;
    }
    _isInputBlank(str) {
        return (!str || this.isWhiteSpacesOnlyRegex.test(str));
    }
    _isNotNumber(value){
        return isNaN(Number(value))
    }
    _isBookingPlaceNotValid(bookingPlace){
        if(this._isInputBlank(bookingPlace)) return true;
        const book = bookingPlace.split(" ");
        if(book[0] !== "chair" || book[0] !== "room") return true;
        if(this._isNotNumber(book[1])) return true;
        return false;
    }
    _isDateTimeNotValid(date){
        if (!(date instanceof Date) || isNaN(date)) return true;
        return false;
    }
}

module.exports = BookingManagerValidator;