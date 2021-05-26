import React from "react";



const Commentform = ({ postid, username }) => {

  function refreshPage() {
    window.location.reload();
  };

  return (
      <div id="commentform" className="formtainer row justify-content-md-center">
      <form action="/api/addcomment" method="POST" onSubmit={refreshPage}>
          <input name="postid" type="hidden" value={postid}></input>
          <input type="hidden" name="userName" value={username}></input>
          
          <label htmlFor="Textarea1" className="form-label">
            Your Comment
          </label>
          <textarea
            className="form-control"
            id="Textarea1"
            rows="1"
            name="body"
          ></textarea>
        <button id="commentsubmit" type="submit" class="btn btn-primary">Submit</button>
        
      </form>
      </div>
    
  );
};

export default Commentform;
