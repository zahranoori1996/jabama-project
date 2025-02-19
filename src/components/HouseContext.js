import { createContext, useState } from "react";
import { housesData } from "../data"
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
    const [houses, setHouses] = useState(housesData);
    //one city show
    const [city, setCity] = useState("مقاصد (همه)");
    // all city show
    const [cities, setCities] = useState([]);
    const [property, setproperty] = useState("خانه ها (همه)");
    const [properties, setproperties] = useState([]);
    const [price, setPrcie] = useState("قیمت ها (همه)");
    const [loading, setLoading] = useState(false);

    return (
        <HouseContext.Provider value={{
            houses,
            setHouses,
            city,
            setCity,
            cities,
            setCities,
            property,
            setproperty,
            properties,
            setproperties,
            price,
            setPrcie,
            loading,
            setLoading
        }}>
            {children}
        </HouseContext.Provider>
    )
}
export default HouseContextProvider;