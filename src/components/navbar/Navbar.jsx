import React from 'react'
import styled from 'styled-components'
import { Links } from './Links'

export const Navbar = () => {
  return (
    <Nav>
        <Links to="/">Home</Links>
        <Links to="To-Do">To-Do</Links>
        <Links to="PokeApi">PokeApi</Links>
    </Nav>
  )
}

const Nav = styled.nav`
    width:100%;
    height: 20%;
    background-color:#2f4a63;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    margin-bottom:5%;`
