import React from 'react'
import { Box } from './Box'
import { InputField } from './InputField'
import { useQuery } from "react-query"
import axios from 'axios'

export const PokeApi = () => {
  const fetchData =()=> axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
  const {data,isLoading,isErrror,error}=useQuery("data",fetchData)
  console.log(data)
  return (
    <Box>
        <InputField/>
        
    </Box>
  )
}
