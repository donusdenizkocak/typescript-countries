 import axios from "axios"
import { CountryType } from "../types"
import { useEffect, useState } from "react"

 const Home = () => {
   const [countries, setCountries] = useState<CountryType[]>([])
    const getCountries = async () =>{
        try {
            const {data} =await axios.get<CountryType[]>('https://restcountries.com/v3.1/all')
            setCountries(data)
        } catch (error) {
            console.log(error)
        }        
    }
 console.log(countries)
    useEffect(()=>{
        getCountries()
    }, []);
  return (
    <div>Home</div>
  )
}
export default Home