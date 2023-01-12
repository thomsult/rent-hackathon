import React, { useState } from 'react';
import { usePosition } from 'react-geolocated';

function CitySelector() {
  const [currentCity, setCurrentCity] = useState('');
  const [cityOptions, setCityOptions] = useState([]);
  const [
    coords: { latitude, longitude }
   ] = usePosition();

  useEffect(() => {
    if (latitude && longitude) {
          
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_API_KEY`)
        .then(res => res.json())
        .then(data => {
          if (data.status === 'OK') {
            const city = data.results[0].address_components.find(component => component.types.includes('locality')).long_name;
            setCurrentCity(city);
          }
        })
        .catch(err => console.log(err));
    }
    // retrieve all cities from a third-party API
    fetch('https://api.opencagedata.com/geocode/v1/json?q=all&key=YOUR_API_KEY')
      .then(res => res.json())
      .then(data => {
        if (data.status.code === 200) {
          const cities = data.results.map(result => result.components.city);
          setCityOptions([...new Set(cities)]);
        }
      })
      .catch(err => console.log(err));
  }, [latitude, longitude]);

  return (
    <div>
      <label>Select City:</label>
      <select value={currentCity} onChange={e => setCurrentCity(e.target.value)}>
        <option value={currentCity}>{currentCity ? currentCity : 'Loading...'}</option>
        {cityOptions.map(city => <option key={city} value={city}>{city}</option>)}
      </select>
    </div>
  );
}

export default CitySelector;
