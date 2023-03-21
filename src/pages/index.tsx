import Head from "next/head";
import { Inter } from "next/font/google";
import axios from "axios";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Image from "next/image";
import Weather from './components/Weather'
import Spinner from './components/Spinner'

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperia&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data);
    });
    setCity("");
    setLoading(false);
  };
  console.log(city)


  if(loading){
    return <Spinner/>
  }
  else{
    return (
      <>
        <Head>
          <title>Weather Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        {/* Overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-white/40 z-[1]" />
        {/* BackGround Image */}
        <Image
          src="https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
          layout="fill"
          className="object-cover"
          alt={""}
        />
        {/* Search */}
  
        <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10">
          <form onSubmit={fetchWeather} className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl">
            <div>
              <input
              onChange={(e) => setCity(e.target.value)}
                className="bg-transparent border-none text-white focus:outline-none text-2xl placeholder:text-white"
                type="text"
                placeholder="Search City"
              />
            </div>
            <button onClick={fetchWeather}>
              <BsSearch size={25} />
            </button>
          </form>
        </div>
  
  
        {/* Display */}
        {weather.main && <Weather data={weather}/>}
      </>
    );
  }


 
}
