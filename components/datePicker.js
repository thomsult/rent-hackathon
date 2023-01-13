import React, { useState, useContext, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import LocationContext from '../context/LocationContext';


function DateRangePicker() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [city, setCity] = useState('');
  const {location, setLocation } = useContext(LocationContext)

  useEffect(() => {
    setLocation({startDate, endDate})
    

  }, [startDate, endDate])
  
  

  return (
    <div className="w-full text-white bg-black md:pt-4 pb-4 px-8 py-4 mt-5 lg:rounded-md flex flex-col max-w-screen items-center min-w-screen justify-between lg:flex-row">
      <div>
        <h1>Start date</h1>
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
        <input className='rounded-md md:mt-5 mb-5 text-black' type="text" placeholder="Type the hour" onChange={(e) => setTime(e.target.value)} required id="time" name="time" label="time" autoComplete="time"/>
      </div>
      <div>
        <h1>City</h1>
        <input className='rounded-md md:mt-5 mb-5 text-black' type="text" placeholder="Type your city" onChange={(e) => setCity(e.target.value)} required id="city" name="city" label="city" autoComplete="city"/>
      </div>
      <button className="2xl:bg-[#F3B33D] px-5 rounded-md max-h-[3em] xl: bg-[#F3B33D] px-5 rounded-md max-h-[3em] mt-6 bg-[#F3B33D] px-5 rounded-md max-h-[3em] md:bg-[#F3B33D] px-5 rounded-md max-h-[3em] sm: bg-[#F3B33D] px-5 py-3 rounded-md max-h-[3em]">See the cars</button>
    </div>
  );
}

export default DateRangePicker;