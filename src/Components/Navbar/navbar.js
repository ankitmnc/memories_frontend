import React,{useContext} from 'react';
import memories from "../../images/memories.png"
import './style.css'
import {AuthContext} from "../../context/AuthContext"

const Navbar = () => {
    const {dispatch} = useContext(AuthContext)
    const {currentUser}= useContext(AuthContext);

    const handleLogout=(e)=>{
        dispatch({type:"LOGOUT", payload:currentUser})
    }
    
    return ( 
        <div className='d-flex justify-content-center container '>
        <div className='d-flex header my-2 rounded container '>
            <div className='text-left mx-2 w-75'>
                <h1 className='text-left my-1 text-light'>Memories<span><img style={{height: '3.5rem'}} src={memories} alt='mer'/>
            </span></h1></div>
            <div className='w-25 d-flex align-items-center' style={{justifyContent: 'flex-end'}}>
                {currentUser?.photoURL ? <img style={{height: '2.5rem',borderRadius: '50%',marginRight: '0.4rem'}} src={currentUser.photoURL}  alt='m'/> : null}
                <button class="btn btn-sm h-50 btn-warning" onClick={handleLogout}> { currentUser ? 'Logout' : 'Sign Up' }</button>

            </div>


                

        </div>
        </div>

     );
}
 
export default Navbar;