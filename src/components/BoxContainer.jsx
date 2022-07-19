import React, { useState } from 'react'
import styled from 'styled-components'

export const BoxContainer = ({setInputText,todos,setTodos,inputText}) => {
  
    const inputTextHandler =(e)=>{

        setInputText(e.target.value)
    }
    const submitTodoHandler=(e)=>{
        e.preventDefault();
        setTodos([...todos,{text:inputText,completed:false,id:Math.random()*1000}]);
        setInputText("");
    }

  return (
    <StyledDiv>
        <StyledH1>To Do</StyledH1>
        <Form ><StyledInput placeholder='Add a To-Do' onChange={inputTextHandler} value={inputText} /><StyledButton onClick={submitTodoHandler}>Submit</StyledButton></Form>
    </StyledDiv>
  )

  
}
const StyledH1 = styled.h1`
    color:white;
    font-size:4rem
`
const StyledDiv = styled.div`
    width: 70%;
    height: 50%;
    background-color:black;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    border-radius:20px;
    padding-bottom:2%;
`
const Form = styled.form`
    height: 20%;
    width: 100%;
    display:flex;
    align-items:center;
    justify-content:center;

`
const StyledInput=styled.input`
    width: 30%;
    padding:1%;
    font-size:1.2rem;
    border-radius:10px;
    border:none;
    margin-right:1%;
    
`
const StyledButton = styled.button`
    background-color:#A2AEBB;
    width:10%;
    height:100%;
    padding:1%;
    font-size:1.1rem;
    border-radius:10px;
`