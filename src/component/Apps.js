import React from "react";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


import Todo from "./Todo";


function Apps() {

  const [allTask, setAllTask] = useState([]);
  const [input, setInput] = useState("");

  const applyChange = (e) => {
    setInput(e.target.value);
  };

  /* function to get data from the database  */

  const getTodo = async ()=>{

  }

  /* function to update document  */

  const updateProgress = async (id, data, inprogress)=>{
    
  }

  /* function to add new Document  */

  const pushToDo = async(e)=>{
    e.preventDefault();



  }

  /* function to delete Todo */

  const deleteTodo = async (id)=>{
    
  }

  /* useEffect to populate allTask array when page renders */

  useEffect(()=>{
    getTodo()
  })

  return (
    <>
      <div>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "400px", margin: "0 auto"}}>
          <h1 style={{ textAlign: "center", fontSize: "3rem" }}>TO DO</h1>

          {/* form for taking input */}
          <form>
            <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", }}>
              <TextField
                id="standard-basic"
                label="write a todo"
                variant="standard"
                name="input"
                value={input}
                onChange={applyChange}
                autoComplete="off"
              />
              <Button type="submit" variant="outlined" onClick={pushToDo} sx={{ marginTop: "10px" }}>AddTODO</Button>
            </div>
          </form>

          {/* 
                mapping of documents
            */}
          {allTask.map((data) => {
            return (
              <Todo todo={data.data} inprogress={data.inprogress} id={data.id} updateProgress={updateProgress} deleteTodo={deleteTodo} 
              timestamp={data.timestamp}/>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Apps;
