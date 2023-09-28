 import axios from "axios"
import { CountryType } from "../types"
import { useEffect, useState } from "react"
import Country from "./Country"

 const Home = () => {
   const [countries, setCountries] = useState<CountryType[]>([])
    const getCountries = async () =>{
        try {
            const {data} =await axios.get<CountryType[]>('https://restcountries.com/v3.1/all')
            setCountries(data)
        } catch {
            console.log('error')
        }        
    }

    useEffect(()=>{
        getCountries()
    }, []);
     console.log(countries)
  return (
    <div>
    {countries.map((country,index) => {
      return <Country key={index} country={country} />
    })}
    </div>
  )
}
export default Home