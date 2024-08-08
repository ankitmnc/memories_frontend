import React,{useState} from 'react';
import './styles.css'
import { ArchiveFill,HandThumbsUpFill,HandThumbsUp } from 'react-bootstrap-icons';
import moment from 'moment';


const props = props => {

    const handleLike=()=>
    {
        props.addlike(props.id);
        
    }
    const likes=props.likes;
    const Likes = () => {
        if (props.likes.length > 0) {
          return props.likes.find((like) => like === (props.currentUser.uid))
            ? (
              <><HandThumbsUpFill />&nbsp;{props.likes.length > 2 ? `You and ${props.likes.length - 1} others` : `${props.likes.length} like${props.likes.length > 1 ? 's' : ''}` }</>
            ) : (
              <><HandThumbsUp />&nbsp;{props.likes.length} {props.likes.length === 1 ? 'Like' : 'Likes'}</>
            );
        }
    
        return <><HandThumbsUpFill />&nbsp;Like</>;
    };
    return (
        <div className="card " style={{width: "90%",maxWidth: '20rem'}}>
            <div className="parent overlay" style={{propsion: 'absolute'}}>
                
                
            <img className="card-img" src={props.imgsrc||"https://images.unsplash.com/photo-1600858388785-d51024fb8f04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} alt="memoryclick"/>
            <div className="card-img-overlay d-flex">
                <div style={{width: '80%'}}>
                <h5 className="creator text-white">{props.creator}</h5>
                <p className="card-text text-white">{moment(props.createdAt).fromNow()} </p>
            </div>
             <div style={{justifyContent: 'float-end'}}>
             {props.imgUrl ? <img className="float-right" style={{height: '3rem',borderRadius: '50%'}} src={props.imgUrl}  alt='none' /> : null}
            
             </div>
                
                </div>
                
            </div>
            <div className="cardbody text-left m-4" >
            <h5 className="card-title text-black">{props.title}</h5>
                <p className="message ">{props.message}</p>
            </div>

            <div className=" rounded d-flex container button-group" role="group"  >
            <div className='col-9'>
            <button type="button" className='btn btn-primary  btn-rounded' onClick={handleLike}  >< Likes /></button>
            </div>
            {props.currentUser.uid===props.creatorId ? 
            <div className=' col d-flex justify-content-right' style={{justifyContent: 'flex-end'}}>
            <button type="button" className='btn btn-primary btn-rounded' onClick={()=>props.deletepost(props.id)}> <ArchiveFill/></button>
            </div> : null}
            
            </div>


        </div>
    );
    
}

export default props;