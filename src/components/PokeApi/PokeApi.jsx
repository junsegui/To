import React from 'react'
import { Box } from './Box'
import { InputField } from './InputField'
import { useQuery } from "react-query"
import axios from 'axios'

export const PokeApi = () => {
  const fetchData = axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
  
  return (
    <Box>
        <InputField/>
        
    </Box>
  )
}
