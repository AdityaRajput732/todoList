import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import Navbar from './components/Navbar'
import './globals.css'
import {RiTodoLine} from 'react-icons/ri'

const page = () => {
  return (
    <main>
      <h2><RiTodoLine classNaame='icons'/>TODO NEXT + TYPESCRIPT<RiTodoLine classNaame='icons'/></h2>
      <Navbar />
      <AddTodo />
      <Todos />
    </main>
  )
}

export default page