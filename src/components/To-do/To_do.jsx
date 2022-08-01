import { useState } from 'react';
import {Box} from "./Box"
import {BoxContainer}from "./BoxContainer"
import { List } from './List';
import React from 'react'

export const To_do = () => {
    const [inputText,setInputText]=useState("")
    const [todos,setTodos]=useState([]);
    return (
    <Box>
        <BoxContainer setInputText={setInputText} todos={todos} setTodos={setTodos} inputText={inputText}/>
        <List todos={todos} setTodos={setTodos}/>
    </Box>
  )
}


//
//<Box>
//
//
//</Box>