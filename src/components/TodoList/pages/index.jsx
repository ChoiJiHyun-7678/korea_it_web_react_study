import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";

function Index() {

  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState("all")
  
  useEffect(() => {
    let localStorageTodoList = localStorage.getItem("todoList");
    if (!localStorageTodoList) {
      localStorage.setItem("todoList", JSON.stringify([]))
      localStorageTodoList = []
      setTodoList(localStorageTodoList);
    } else {
      setTodoList(JSON.parse(localStorageTodoListi))
    }
  })

  useEffect(() => {
      let localStorageTodoList = localStorage.getItem("todolist");
      const todoList = JSON.stringify(todoList);
      if (localStorageTodoList !== todoList) {
        localStorage.setItem("todolist", todoList);
      }
    }, [todoList])
  
    const filterTodoList = todoList.filter((todo) => {
      if(filter==="all") {
        return true;
      } else if (filter === "complete") {
        return todo.isComplete;
      } else if (filter === "iscomplete") {
        return todo.isComplete;
      }
    }).filter(todo=>{
      if(searchText.trim().length===0){
        return true
      }
      return todo.content.includes(searchText)
    })
}

export default Index;
