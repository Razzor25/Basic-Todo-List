import { clear } from '@testing-library/user-event/dist/clear';
import List from './list'
import Imp_List from './imp_list'
const Home=(props)=>{
 return(
    
        <div className="home">
            <Imp_List imp_dos={props.imp} imp_title="Important Task" handleDeleteImp={props.handleDeleteImp} handleNotImp={props.handleNotImportant}/> 
            <List dos={props.todo} title="Works To do" handleDelete={props.handleDelete} handleImportant={props.handleImportant}/>
                      
        </div>
    );

}
export  {Home};