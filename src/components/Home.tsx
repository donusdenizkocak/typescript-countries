 import axios from "axios"
import { CountryType } from "../types"
import { useEffect, useState } from "react"
import Country from "./Country"
import Loading from "./Loading"


 const Home = () => {
   const [countries, setCountries] = useState<CountryType[]>([])
   const [loading,setLoading] = useState<boolean>(false)
    const getCountries = async () =>{
      setLoading(true)
        try {
            const {data} =await axios.get<CountryType[]>('https://restcountries.com/v3.1/all')
            setCountries(data)
        } catch {
            console.log('error')
        } finally{
           setLoading(false)
        }       
    }

    useEffect(()=>{
        getCountries()
    }, []);
     console.log(countries)
  return (
    <div>
      <Loading loading={loading}>
            {countries.map((country,index) => {
            return <Country key={index} country={country} />
          })}
      </Loading>
    
    </div>
  )
}
export default Home