

function CitySelector(){
    const handleChange = (e) => {
        e.preventDefault();
        const inputCity = e.target.city;
    }

return (
        <div>
            <h1>Pick up location: </h1>
                <input className="rounded-md" type="text" onChange={handleChange} placeholder="Type your city" required id="city" name="city" label="city" autoComplete="city"/>
        </div>
    )
}
export default CitySelector;
