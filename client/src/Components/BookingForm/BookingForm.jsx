import React, {useState, useMemo} from "react";
import {Dropdown} from "monday-ui-react-core/";
import "monday-ui-react-core/dist/main.css"
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const BookingForm = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [startHour, setStartHour] = useState();
    const [endHour, setEndHour] = useState();

    const options = useMemo(() => 
        [{
            value: 7,
            label: "07:00"
          }, {
            value: 8,
            label: "08:00"
          }, {
            value: 9,
            label: "09:00"
        }]
        , []);

  return (
    <div className="booking-form">
      <div className="booking-form-container">
        <div className="booking-form-header">
          <h1>Book the office</h1>
        </div>
        <div className="booking-form-body">
          <form>
            <div className="start-date">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="Start Date"
                    value={startDate}
                    onChange={(date) => {
                    setStartDate(date);setEndDate(date);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
                </LocalizationProvider>
            </div>
            <div className="end-date">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="End Date"
                        value={endDate}
                        onChange={(date) => {
                            if (date>=startDate) {
                                setEndDate(date)};
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </div>
            <div className="start-hour">
                <Dropdown defaultValue={[options[0]]} placeholder="Start Hour" options={options} className="dropdown-stories-styles_big-spacing" />
            </div>
            <div className="end-hour">
            <Dropdown defaultValue={[options[0]]} placeholder="End Hour" options={options} className="dropdown-stories-styles_big-spacing" />
            </div>
            <button className="booking-submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;


