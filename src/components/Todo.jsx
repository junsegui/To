import React from 'react'
import styled from 'styled-components'

export const Todo = ({text ,todos, setTodos,todo}) => {
    const deleteHandler=()=>{
        setTodos(todos.filter(element=>element.id !== todo.id))
    }
    

  return (
    <Div>
        <Li>{text}</Li>
 
        <Button onClick={deleteHandler}>X</Button>
    </Div>
  )


}
const Li=styled.li`
    color:white;
    width:60%;
    text-decoration:overline;
`
const Div=styled.div`
    width:100%;
    height:20%;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    border: 1px solid white;
    align-items:center

`
const Button=styled.button`

    display:flex;
    
`
