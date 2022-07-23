const Navbar=(props)=>{
    return(
        <nav className="navbar">
            <h1>TO:DO List</h1>
             <div className="links">
              <a href="#">Add Work!</a>
                {!props.show &&
                <a onClick={()=>props.handleSignIn()}
                style={{cursor:'pointer'}}>Sign in</a>
                } 
                {props.show &&
                <a onClick={()=>props.handleSignOut()}
                style={{cursor:'pointer'}}>Sign out</a>
                }   
             </div>
        </nav>      
     );
};
export default Navbar;

