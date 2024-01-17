import { useState } from 'react'


function App() {
 
 const[todos,setTodos] = useState([{
  title: "Study DSA",
  description: "From 6:00 Pm to 8:00pm"
 },
 {
  title: "Study Web Development",
  description: "From 10:00 Pm to 12:00am"
 }])


  return (
    <>
      {todos.map(function(todo){
        return <Todo title={todo.title} description={todo.description} />
      })}
    </>
  )
}

function Todo(props){
  return<div>
    <h1>Title : {props.title}</h1>
    <h2>Description : {props.description}</h2>
  </div>
}

export default App
