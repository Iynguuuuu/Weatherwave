/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";

const TopButtons = ({ setQuery }) => {
    const cities = [
        {
            id: 1,
            name: "Colombo",
        },
        {
            id: 2,
            name: "New York",
        },
        {
            id: 3,
            name: "London",
        },
        {
            id: 4,
            name: "Paris",
        },
        {
            id: 5,
            name: "Toronto",
        }
    ];

    return (
        <div>

            <h1 className="mx-auto text-[32px] font-extrabold ml-[16rem] tracking-wider flex flex-row ">
                <span><TiWeatherPartlySunny className="text-[38px] mr-[5px]" /></span>WeatherWave</h1>


            <div className="flex items-center justify-around my-6">

                {
                    cities.map(city => (
                        <button
                            key={city.id}
                            className="text-2xl font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in"
                            onClick={() => setQuery({ q: city.name })}>
                            {city.name}
                        </button>
                    ))
                }
            </div>
        </div>

    );
};

export default TopButtons;
