import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DateRangePicker() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="px-8 py-18 mt-5 mr-5 ml-5 max-w-screen flex items-start min-w-screen justify-start bg-red-500">
    
      <h1>Pick up date and time </h1>
      {/* <span>from</span> */}
      <DatePicker className='rounded-md'
        selected={startDate}
        onChange={date => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        placeholderText="Select start date"
      />
   
      <DatePicker className='rounded-md'
        selected={endDate}
        onChange={date => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        placeholderText="Select end date"
      />
      <span>
        Time 
      </span>
      <input className="rounded-md" type="text" placeholder="Type the hour" required id="city" name="city" label="city" autoComplete="city"/>
      <span>
        City 
      </span>
      <input className="rounded-md" type="text" placeholder="Type your city" required id="city" name="city" label="city" autoComplete="city"/>
    </div>
  );
}



export default DateRangePicker;
