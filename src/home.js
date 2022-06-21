import { clear } from '@testing-library/user-event/dist/clear';
import {useState} from 'react'
import List from './list'
import Imp_List from './imp_list'
const Home=()=>{

    const [todo,setTodo]=useState([
    {title:'Study', body:'Study react from youtube..', id:1},
    {title:'Series', body:'Netflix Stranger Things', id:2},
    {title:'Nityakarma', body:'Bath , eat and take rest..', id:3}
    ]);

    const [imp,setImp]=useState([]);
  
    const handleDelete=(id)=>{
    setTodo(todo.filter(todo=>todo.id!=id));
    }

    const handleImportant=(id)=>{
    setImp(imp.concat(todo.filter(todo=>todo.id==id)));
    setTodo(todo.filter(todo=>todo.id!=id));
    }

    const handleNotImportant=(id)=>{
    setTodo(todo.concat(imp.filter(imp=>imp.id==id)));
    setImp(imp.filter(imp=>imp.id!=id));
    }

    const handleDeleteImp=(id)=>{
    setImp(imp.filter(imp=>imp.id!=id));
    }
 return(
    
        <div className="home">
            <Imp_List imp_dos={imp} imp_title="Important Task" handleDeleteImp={handleDeleteImp} handleNotImp={handleNotImportant}/> 
            <List dos={todo} title="Works To do" handleDelete={handleDelete} handleImportant={handleImportant}/>
                      
        </div>
    );

}
export  {Home};