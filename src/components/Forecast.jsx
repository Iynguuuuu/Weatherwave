/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const Forecast = ({ title, data }) => {
    return (
        <div>
            <div className="flex items-center justify-start mt-6">
                <p className="font-bold tracking-widest uppercase">{title}</p>
            </div>
            <hr className="my-1" />
            <div className="flex items-center justify-between">
                {data.map((d, index) => (
                    <div key={index} className="flex flex-col items-center justify-center">
                        <p className="text-[18px]">{d.title}</p>
                        <img className="w-10 my-2" src={d.icon} alt="weather icon" />
                        <p className="text-[20px]">{`${d.temp.toFixed()}°`}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Forecast;
