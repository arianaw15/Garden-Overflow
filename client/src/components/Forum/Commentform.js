import React from "react";

const Commentform = ({ postid }) => {
  return (
      <div id="commentform" className="formtainer row justify-content-md-center">
      <form>
        
          <label htmlFor="Textarea1" className="form-label">
            Your Comment
          </label>
          <textarea
            className="form-control"
            id="Textarea1"
            rows="1"
            name="body"
          ></textarea>
        <button type="submit" class="btn btn-primary">Submit</button>
        
      </form>
      </div>
    
  );
};

export default Commentform;
