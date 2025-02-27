import { createContext, useEffect, useState } from "react";
import { housesData } from '../data';


export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
    const [houses, setHouses] = useState(housesData);
    const [city, setCity] = useState("مقاصد (همه)");
    const [cities, setCities] = useState([]);
    const [property, setProperty] = useState("خانه ها (همه)");
    const [properties, setProperties] = useState([]);
    const [price, setPrice] = useState("قیمت ها (همه)");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        /*
        مپی که اینجا زدیم برای اینه که شهرها رو در دراپ دان منو نمایش بده
        */
        const allCities = houses.map((house) => {
            return house.city
        })
        //نمایش حالت دیفالت و یونیک شدن شهرها برای نمایش در دراپ دان در متغیر uniqCities
        const uniqCities = ["مقاصد(همه)", ...new Set(allCities)];
        setCities(uniqCities);

    }, [])

    useEffect(() => {
        /*
        مپی که اینجا زدیم برای اینه که نوع خانه ها رو در دراپ دان منو نمایش بده
        */
        const allProperties = houses.map((house) => {
            return house.type
        })
        //نمایش حالت دیفالت و یونیک شدن نوع خانه ها برای نمایش در دراپ دان در متغیر uniqCities
        const uniqProperties = ["خانه(همه)", ...new Set(allProperties)];
        setProperties(uniqProperties);

    }, [])

    //یوزافکت برای آرگومان دوم تعداد تکرار رو میگیره که وقتی آرایه خالی میدیم یعنی یکبار

    const handleClick = () => {
        setLoading(true);
        const isDefault = (str) => {
            return str.split('').includes(('همه'))
        }


        const minPrice = parseInt(price.split('')[0]);
        const maxPrice = parseInt(price.split('')[2]);

        const newHouses = housesData.filter((house) => {
            const housePrice = parseInt(house.price);

            if (house.city === city &&
                house.type === property &&
                house.price >= minPrice &&
                house.price <= maxPrice
            ) {
                return house
            }
            if (isDefault(city) &&
                isDefault(property) &&
                isDefault(price)) {
                return house;

            }
            if (!isDefault(city) &&
                isDefault(property) &&
                isDefault(price)) {
                return house.city === city;

            }
            if (isDefault(city) &&
                !isDefault(property) &&
                isDefault(price)) {
                return house.property === property

            }

            if (isDefault(city) &&
                isDefault(property) &&
                !isDefault(price)) {
                if (housePrice >= minPrice && housePrice <= maxPrice) {
                    return house
                }


            }

            if (!isDefault(city) &&
                !isDefault(property) &&
                isDefault(price)) {
                return house.city === city && house.type === property

            }
            if (!isDefault(city) &&
                isDefault(property) &&
                !isDefault(price)) {
                if (housePrice >= minPrice && housePrice <= maxPrice) {
                    return house.city === city;
                }

            }
            if (isDefault(city) &&
                !isDefault(property) &&
                !isDefault(price)) {
                if (housePrice >= minPrice && housePrice <= maxPrice) {
                    return house.type === property;
                }
            }

        })



        setTimeout(() => {
            return (
                newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
                setLoading(false)
            );
        }, 1000)

    }

    return (
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
            setLoading,
            handleClick

        }}>
            {children}
        </HouseContext.Provider>
    )

}
export default HouseContextProvider;