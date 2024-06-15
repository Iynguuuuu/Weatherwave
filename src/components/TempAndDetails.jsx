import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";


const TempAndDetails = () => {

    const verticalDetails = [
        {
            id: 1,
            Icon: FaThermometerEmpty,
            title: "Feels Like",
            value: "22°"
        },
        {
            id: 2,
            Icon: BiSolidDropletHalf,
            title: "Humidity",
            value: "346%"
        },
        {
            id: 3,
            Icon: FiWind,
            title: "Wind",
            value: "11 Km/h",
        },
    ];

    const horizontalDetails = [
        {
            id: 1,
            Icon: GiSunrise,
            title: "Sunrise",
            value: "05:33 AM"
        },
        {
            id: 2,
            Icon: GiSunset,
            title: "Sunset",
            value: "08:33 PM"
        },
     
    ];

    return (

        <div>
            <div className="flex  items-center justify-center py-6 text-xl text-cyan-300 ">
                <p>Rain</p>
            </div>

            <div className="flex flex-row  items-center justify-between py-3">
                <img className="w-20" src="http://openweathermap.org/img/wn/01d@2x.png" alt="Weather Icon" />

                <p className="text-5xl">34°</p>

                <div className="flex flex-col space-y-3 items-start">

                    {
                        verticalDetails.map(({ id, Icon, title, value }) => (
                            <div key={id} className="flex font-light text-sm items-center justify-center">
                                <Icon size={18} className="mr-1" />
                                {`${title}:`} <span className="font-medium ml-1">{value}</span>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="flex flex-row items-center justify-center space-x-10 text-sm py-3">
                {
                    horizontalDetails.map(({ id, Icon, title, value }) => (
                        <div key={id} className="flex flex-row items-center">
                            <Icon size={30} className="bg-gray-700/20 rounded-md p-[2px]  " />
                            <p className="font-lightweight mt-1 ml-1 text-[18px]">{`${title}:`} <span className="font-medium ml-1">{value}</span></p>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default TempAndDetails
