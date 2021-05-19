import React from "react";

const Commentform = ({ postid }) => {
  return (
        <div className="container justify-content-center">
      <form>
        <div className="mb-3">
          <label htmlFor="Textarea1" className="form-label">
            Your Comment
          </label>
          <textarea
            className="form-control"
            id="Textarea1"
            rows="3"
            name="body"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </div>
    
  );
};

export default Commentform;
