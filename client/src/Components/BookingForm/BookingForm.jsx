import React from "react";

const bookingForm = () => {

  return (
    <div className="booking-form">
      <div className="booking-form-container">
        <div className="booking-form-header">
          <h1>Book the office</h1>
        </div>
        <div className="booking-form-body">
          <form>
            <div className="start-date">Start Date</div>
            <div className="input-start-date">
                <input className="form-date-input" placeholder="" autocomplete="off" type="date" id="input" role="" aria-label="Choose a date" aria-owns="" aria-activedescendant="" data-testid="text-field_input" value=""/>
                <div class="input-icon-calender" data-testid="clickable" role="button" tabindex="-1"></div>
            </div>
            <div className="end-date">End Date</div>
            <div className="start-hour">Start Hour</div>
            <div className="start-hour">Start Hour</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default bookingForm;


