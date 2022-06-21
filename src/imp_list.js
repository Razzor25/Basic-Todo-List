import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons'
import {faCheck} from '@fortawesome/free-solid-svg-icons'

const imp_BlogList=(Attr)=>{
    const imp_dos=Attr.imp_dos
    if(Object.keys(imp_dos).length==0){
        return(
            <div className="List-preview">
            <h2 style={{margin:'10px 0'}}>{Attr.imp_title}</h2>
            <p>Nothing to Show</p>
        </div>
        )
    }
    else{
        return(
            <div className="List-preview">
            <h2 style={{margin:'10px 0'}}>{Attr.imp_title}</h2>
            {
         imp_dos.map((imp_todo)=>
             (
                <div className="list-p">
                <div className="items">
                    <h2 style={{color:'#F06E99'}}>{imp_todo.title}</h2>
                    <p>{imp_todo.body}</p>
                </div>
                <div className="add"> 
                <a  href="#"><button onClick={()=>Attr.handleNotImp(imp_todo.id)}><FontAwesomeIcon icon={faStar} className="icons"></FontAwesomeIcon></button></a>
                <a  href="#"><button onClick={()=>Attr.handleDeleteImp(imp_todo.id)}><FontAwesomeIcon icon={faCheck} className="icons" /></button></a>   
                            
                </div>
                </div>
             )
         )}
        </div>
        )
    }
   
}
export default imp_BlogList;