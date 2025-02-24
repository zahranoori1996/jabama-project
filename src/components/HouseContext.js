import { createContext, useEffect, useState } from "react";
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

    useEffect( ()=>{
        /*
        مپی که اینجا زدیم برای اینه که شهرها رو در دراپ دان منو نمایش بده
        */
        const allCities = houses.map((house)=>{
            return house.city
        })
        //نمایش حالت دیفالت و یونیک شدن شهرها برای نمایش در دراپ دان در متغیر uniqCities
        const uniqCities = ["مقاصد(همه)",...new Set(allCities)];
        setCities(uniqCities);

    },[])

    useEffect( ()=>{
        /*
        مپی که اینجا زدیم برای اینه که نوع خانه ها رو در دراپ دان منو نمایش بده
        */
        const allProperties = houses.map((house)=>{
            return house.type
        })
        //نمایش حالت دیفالت و یونیک شدن نوع خانه ها برای نمایش در دراپ دان در متغیر uniqCities
        const uniqProperties = ["خانه(همه)",...new Set(allProperties)];
        setProperties(uniqProperties);

    },[])


  

    //یوزافکت برای آرگومان دوم تعداد تکرار رو میگیره که وقتی آرایه خالی میدیم یعنی یکبار

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