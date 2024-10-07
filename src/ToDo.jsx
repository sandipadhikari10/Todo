import React, {useState} from "react";
function Todo(){
const [tasks, setTasks] = useState(["I eat rice","I want apple", "ram play ball"])
const [newtasks, setNewTasks] = useState("");

function handleInputChange(event){
    setNewTasks(event.target.value)

}
function addTasks(){
    if(newtasks.trim() !== ""){
    setTasks (t=>[...t, newtasks]);
    setNewTasks("");
    }    
    
}
function deleteTasks(index){

    const updatedTasks = tasks.filter((_,i)=> i !== index);
    setTasks(updatedTasks);
  

}
function moveTaskUp(index){
    if(index > 0){
    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index - 1]] = 
    [updatedTasks[index - 1], updatedTasks[index]];

    setTasks(updatedTasks);
    }


}
function moveTaskDown(index){
    if(index < tasks.length - 1){
        const updatedTasks = [...tasks];
        [updatedTasks[index + 1 ], updatedTasks[index]] = 
        [updatedTasks[index], updatedTasks[index + 1]];
    
        setTasks(updatedTasks);
        }

}


    return(
        <div className="to-do-list">
            <h1 >To-Do-List</h1>
            <input type="text" value={newtasks} placeholder="Enter a task.." onChange={handleInputChange}/>
            <button className="add-btn" onClick={addTasks}>Add</button>
            <ol > 
                {tasks.map((task, index)=>
                <li key={index}> <span>{task}</span> &nbsp;
                <button className="delete-btn" onClick={()=> deleteTasks(index)}>Delete</button>
                <button className="move-btn" onClick={()=> moveTaskUp(index) }>☝</button>
                <button className="move-btn" onClick={()=> moveTaskDown(index)}>👇</button>
                </li>
               
                
                )}
                

            </ol>

        </div>
    )
}
export default Todo