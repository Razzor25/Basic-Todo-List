import NavBar from './navbar';
import {Home} from './home';
import {useState} from 'react'

function App() {
  const [todo,setTodo]=useState([
    {title:'Study', body:'Study react from youtube..', id:1},
    {title:'Travel', body:'Go to station at 4:o clock Sharp.', id:4},
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

    const [show,setShow]=useState(false);
    const handleSignOut=()=>setShow(false);
    const handleSignIn=()=>setShow(true);
  return (
    <div className="App">
        <NavBar show={show} handleSignIn={handleSignIn} handleSignOut={handleSignOut}/>
      <div className="Contents">
        {show && <Home imp={imp} todo={todo} handleDelete={handleDelete} handleDeleteImp={handleDeleteImp} 
        handleImportant={handleImportant} handleNotImportant={handleNotImportant}/>
        }
        {!show && <div> Kindly <b style={{padding:'0 5px 0 8px '}}><u>Sign-in</u></b> and check your works.</div>}
      </div>
    </div>
  );
}

export default App;
