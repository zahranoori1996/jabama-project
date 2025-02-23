import { createContext, useState } from "react";
import {housesData} from '../data';


export const HouseContext = createContext();

const HouseContextProvider = ({children}) =>{
    const [houses,setHouses] = useState(housesData);
    const [city,setCity] = useState("مقاصد (همه)");
    const [cities,setCities] = useState([]);
    const [property,setProperty] = useState("خانه ها (همه)");
    const [properties,setProperties] = useState([]);
    const [price,setPrice] = useState("قیمت ها (همه)");
    const [loading,setLoading] = useState(false);

    return(
        <HouseContext.Provider value={{
            houses,
            setHouses,
            city,
            setCity,
            cities,
            setCities,
            property,
            setProperty,
            properties,
            setProperties,
            price,
            setPrice,
            loading,
            setLoading

        }}>
            {children}
        </HouseContext.Provider>
    )

}
export default HouseContextProvider;