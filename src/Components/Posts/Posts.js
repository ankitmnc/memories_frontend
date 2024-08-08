import React from "react";
import Post from './Post/Post'

const Posts = ({ posts, deletepost,addlike,currentUser}) => {
  const postlist = posts.length ? (
    posts.map((post) => {
      return (
        <div className="collection-items d-flex justify-content-center col-xl-6  " key={post.id}>
        <Post creatorId={post.creatorId} createdAt={post.createdAt} imgUrl={post.imgUrl}
         imgsrc={post.selectedFile} message={post.message} title={post.title} creator={post.creator} id={post._id}
          deletepost={deletepost} likeCount={post.likeCount} addlike={addlike} currentUser={currentUser} likes={post.likes} />
        </div>
      );
    })
  ) : (
    <div>
    <div className="d-flex justify-content-center m-2">
  <div className="spinner-border text-primary" role="status">
    <span className="sr-only"></span>
  </div>

</div>
  <p className="text-center">Please wait Loading...</p>
</div>
  );
  return <div className="row">{postlist}</div>;
};
export default Posts;