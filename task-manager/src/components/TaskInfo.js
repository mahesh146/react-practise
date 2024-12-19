import React from 'react'
import { useState } from 'react'
const TaskInfo = () => {
    const[tasks,setTasks] = useState([]);
    const[title,setTitle] = useState("");
    const[description,setDescription]= useState("");
    const[editIndex,setEditIndex] = useState(null);
    
    const addTask=(e)=>{
            e.preventDefault();
            if(editIndex!=null){
                setTasks((prevTasks)=>{
                    const updatedTasks=[...prevTasks];
                    updatedTasks[editIndex]={title,description};
                    return updatedTasks;
                });
                setEditIndex(null);
            }
            else{
            setTasks((prevTasks)=>[...prevTasks,{title:title,description:description}]);
            }
            setTitle("");
            setDescription("");
    }

    const changeValue=(i)=>{
            setEditIndex(i);
            setTitle(tasks[i].title);
            setDescription(tasks[i].description)
    }
    const delTask=(i)=>{
        setTasks(tasks.filter((_,idx)=>(i!==idx)))
    }
  return (
    <div>
        <h1>TaskInfo</h1>
        
        <div>
            <form onSubmit={addTask}>
               <h3>Title</h3> <input type="text" placeholder="enter title" value={title} onChange={(e)=>{setTitle(e.target.value)}} />
                <h3>Description</h3><input type='text' placeholder='enter description' value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
                <button type='submit'>{editIndex!=null ? "Update":"Add"}</button>
            </form>
            
            {/* <ul>{tasks.map((task, i) => {
                return (
                    <React.Fragment key={i}>
                        <li >{task.title} </li>
                        <li >{task.description} </li>
                        <button onClick={()=>(changeValue(i))}>Edit </button>
                    </React.Fragment>
                )
            })}
            </ul> */}
             {tasks.map((task, i) => {
                return (
                    <>
                    <p>Title</p>  {task.title}
                    <p>Description</p> {task.description}
                    <button onClick={()=>(changeValue(i))}>Edit </button>
                    <button onClick={()=>{delTask(i)}}>Delete</button>
                    </>
                )
            })}
            

        </div>
        
        </div>
  )
}

export default TaskInfo;