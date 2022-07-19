import React from 'react'
import styled from 'styled-components'


import { Todo } from './Todo'

export const List = ({todos , setTodos}) => {

  return (
   <Container>
      <Ul>
        {todos.map(todo=>(
          <Todo  text={todo.text} key={todo.id} todos={todos} setTodos={setTodos} todo={todo}/>
        ))}

      </Ul>
   </Container>
  )
}
const Container=styled.div`
    width: 70%;
    height: 50%;
    background-color:black;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    border-radius:20px;
    margin-top:1%;
`
const Ul=styled.ul`
  width: 90%;
  height:100%;
  display:flex;
  flex-direction:column;
  list-style:none;
  justify-content:center;
  align-items:center;
`