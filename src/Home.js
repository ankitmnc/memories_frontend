import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Posts from "./Components/Posts/Posts"
import Form from "./Components/Form/Form"
import axios  from 'axios';
import Navbar from './Components/Navbar/navbar';
const url="https://amigos-pqc0.onrender.com/posts"

class Home extends Component {
    state = {
      posts: []
      } 

      async componentDidMount(){
    
        await axios.get(url)
        .then(res=>{
          const posts=[...res.data];
          this.setState({posts: posts})
      
  
        })
  
      }
      deletepost=async(id)=>{
        const posts = this.state.posts.filter((c) => c._id !== id);
        this.setState({ posts });

        await axios.delete(`${url}/${id}`)
        .catch(error => {
          console.log(error);
        }
          
        );
        console.log(this.state);
      }
      addpost=async(post) =>
      {
        var posts=this.state.posts;
        await axios.post(url,post)
        .then(res=>{

          posts=[...posts,res.data];
  
        })
        this.setState((state, props) => ({
          posts: posts
        })
        );
        

      }
      addlike=async(id)=>{
        var posts=this.state.posts;
        await axios.patch(`${url}/${id}/likePost`,{uid: this.props.currentUser.uid})
        .then(res=>{
          posts= posts.map((post) => (post._id === id ? res.data  : post));
    
        })
        .catch(error=>{
          console.log(error);
        })
        this.setState((state, props) => ({
          posts: posts
          
        })
        );
  

      

      }
    
    
    
    render() {
        return(
        <div className='container'>
            <div className='row'>

                <div className="col-xl-8 col-sm-12 col-m-12">
                  <div>
                  <Posts posts ={this.state.posts} deletepost={this.deletepost} addlike={this.addlike} currentUser={this.props.currentUser}/>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-12 col-m-12 d-flex justify-content-center">
                   <Form addpost={this.addpost} currentUser={this.props.currentUser} />

                </div>
            </div>
            
        </div>
    )
}

}

 
export default Home;



