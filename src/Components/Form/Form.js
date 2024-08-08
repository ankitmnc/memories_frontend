import React, { Component } from 'react';
import FileBase from 'react-file-base64';
import './style.css'

class AddPost extends Component  {
  state = { 
    creator: '',
    title: '',
    message: '',
    selectedFile: '',
    creatorId: this.props.currentUser.uid,
    imgUrl: this.props.currentUser.photoURL

  } 

  handleChange =(name)=>(e) =>
  {
      this.setState({
          ...this.state,
          [name]: e.target.value
      })
  }


  handleSubmit = async (e) =>
  {
      e.preventDefault();
      this.setState({...this.state,creatorId: this.props.currentUser.uid});
      this.props.addpost(this.state);
      this.clear();

  }
  clear = () => {
    this.setState({ creator: '', title: '', message: '',selectedFile: ''});
  };

  render(){
  const { creator,title,message } = this.state;
  return (
   <div className=" p-4 m-2 h-custom bg-light form-body" style={{ width: "22rem",maxHeight:'500px' }} >
      <form onSubmit={this.handleSubmit}  >
        <div className="form-group input-group-lg">
          <h3 className="text-center">Create the memories</h3>
          <input
            type="creator"
            className="form-control  my-3"
            id="creator"
            aria-label="Large"
            placeholder="creator"
            value={creator}
            onChange={this.handleChange("creator")}
          />
          <input
            type="title"
            className="form-control  my-3"
            id="title"
            aria-label="Large"
            placeholder="Title"
            value={title}
            onChange={this.handleChange("title")}
          />
          <textarea
            className="form-control my-3"
            id="message"
            placeholder="Message"
            rows="3"
            value={message}
            onChange={this.handleChange("message")}
          ></textarea>
          <FileBase type="file" multiple={false} onDone={({ base64 }) => this.setState({ ...this.state, selectedFile: base64 })} />
        </div>

        <button type="submit" className="btn btn-primary btn-block my-2" style={{width: '100%'}} onClick={()=>this.handleSubmit}>
          Submit
        </button>
        <button type="clear" className="btn btn-danger btn-block my-1" style={{width: '100%'}} onClick={this.clear}>
          Clear
        </button>
      </form>
    </div>
  )};
};

export default AddPost;
