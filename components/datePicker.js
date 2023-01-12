import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DateRangePicker() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="w-full text-white bg-black md:pt-4 pb-4 px-8 py-18 mt-5 mr-5 ml-5 rounded-md flex flex-col max-w-screen items-center min-w-screen justify-between lg:flex-row">
      <div>
        <h1>Debut date</h1>
        {/* <span>from</span> */}
        <DatePicker className='rounded-md md:mt-5 mb-5 text-black'
          selected={startDate}
          onChange={date => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          placeholderText="Select start date"
        />
      </div>
   
      <div> 
        <h1>End date</h1>
        <DatePicker className='rounded-md md:mt-5 mb-5 text-black'
        selected={endDate}
        onChange={date => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        placeholderText="Select end date"
        />
      </div>
      <div>
        <h1>
          Time 
        </h1>
        <input className='rounded-md md:mt-5 mb-5 text-black' type="text" placeholder="Type the hour" required id="city" name="city" label="city" autoComplete="city"/>
      </div>
      <div>
        <h1>City</h1>
        <input className='rounded-md md:mt-5 mb-5 text-black' type="text" placeholder="Type your city" required id="city" name="city" label="city" autoComplete="city"/>
      </div>
    </div>
  );
}



export default DateRangePicker;
