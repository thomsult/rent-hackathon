import React, {useState} from "react";


function datePicker(){
    const [date, setDate] = useState();
    console.log("Date" ,date);
    return(
        <>
        <h1>Select a date: {date} </h1>
         <input type="date" onChange={e=>setDate(e.target.value)}/>
        </>
    )
}
export default datePicker;