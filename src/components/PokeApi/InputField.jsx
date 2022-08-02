import React from 'react'
import styled from 'styled-components'



export const InputField = () => {
    
    
  return (
    <StyledBox>
        <StyledDiv>
            <StyledH1>PokeApi</StyledH1>
        </StyledDiv>
        <StyledDiv>
            <StyledImput/>
            <StyledButton >Submit</StyledButton>
        </StyledDiv>
        
    </StyledBox>
  )
}

const StyledBox=styled.form`
    width: 80%;
    height:20%;
    background-color:black;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    border-radius:10px;
`
const StyledImput=styled.input`
    width:20%;
    height:20%;
`
const StyledDiv=styled.div`
width: 100%;
height: 50%;
display:flex;
justify-content:center;
align-items:center;`

const StyledH1=styled.h1`
    color:white;
`
const StyledButton=styled.button`

`