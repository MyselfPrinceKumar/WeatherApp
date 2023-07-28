import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
function App() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("patna");

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b8bc6bd137826dad8583e9d7f3d367e3`)
      const dataJson = await response.json();
      setCity(dataJson.main);
    }
    fetchApi();
  }, [search])
  return (
    <div className="App w-auto bg-gray-800" >
      <div className="Box w-[450px] h-[450px] bg-slate-400 absolute mt-10 translate-x-96 ml-20 rounded-3xl">
        {
          city ?
            (

              <div>
                <input type="search" onChange={(e) => { setSearch(e.target.value) }} placeholder='Search City' className='absolute -mt-10 bg-gray-200 ml-24 h-9 text-blue-900 text-xl rounded-2xl p-3 text-center border-2 border-black   ' />
                <div className="resul">

                  <h1 className=' text-black text-[56px] text-center mt-16 font-semibold'>{search}</h1>
                  <h4 className='text-gray-800 text-3xl text-center mt-2 font-normal'>{city.temp}°C</h4>
                  <div className="min_max flex  space-x-11 text-center justify-center">
                    <h4 className='text-gray-600 text-xl text-center mt-2 font-normal'>Min-Temp :  {city.temp_min}°C</h4>
                    <h4 className='text-gray-600 text-xl text-center mt-2 font-normal'>Max-Temp : {city.temp_max}°C</h4>
                  </div>
                  <div>
                    <h4 className='text-gray-600 text-xl text-center mt-8 font-normal'>Humidity : {city.humidity}%</h4>
                    <h4 className='text-gray-600 text-xl text-center my-2 font-normal'>Temp Feels-Like : {city.feels_like}°C</h4>
                    <h4 className='text-gray-600 text-xl text-center my-2 font-normal'>Pressure : {city.pressure} hPa</h4>
                  </div>
                </div>
              </div>
            )
            :
            (
              <div>
                <input type="search" onChange={(e) => { setSearch(e.target.value) }} placeholder='Search City' className='absolute mt-6 bg-gray-200 ml-24 h-9 text-blue-900 text-xl rounded-2xl p-3 text-center border-2 border-black   ' />

                <p className='translate-x-36 translate-y-24 text-red-600 text-xl font-semibold'>City Not Found</p>
              </div>
            )
        }
      </div>

    </div>
  );
}
export default App;
