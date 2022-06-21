// import {} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-regular-svg-icons'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
const BlogList=(Attr)=>{
    const dos=Attr.dos;
    if(Object.keys(dos).length==0)
    {
        return(
            <div className="List-preview">
                <h2 style={{margin:'10px 0'}}>{Attr.title}</h2>
                <p>There is no Work Here</p>
            </div>
        )
    }
    else{
    return(
    <div className="List-preview">
        <h2 style={{margin:'10px 0'}}>{Attr.title}</h2>
        {
     dos.map((todo)=>
         (
            <div className="list-p">
            <div className="items">
                <h2 style={{color:'#F06E99'}}>{todo.title}</h2>
                <p>{todo.body}</p>
            </div>
            <div className="add">
            <a  href="#"><button onClick={()=>Attr.handleImportant(todo.id)}><FontAwesomeIcon icon={faStar} className="icons"></FontAwesomeIcon></button></a>
            <a  href="#"><button onClick={()=>Attr.handleDelete(todo.id)}><FontAwesomeIcon icon={faCheck} className="icons"></FontAwesomeIcon ></button></a>
            
            </div>
            </div>
         )
         
     )}
    </div>
);
}
}
export default BlogList;
