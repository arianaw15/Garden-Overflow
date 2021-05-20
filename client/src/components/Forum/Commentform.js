import React from "react";

const Commentform = ({ postid }) => {
  return (
      <div className="formtainer">
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
        <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
      </div>
    
  );
};

export default Commentform;
