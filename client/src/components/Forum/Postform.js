import React from 'react';
import "./index.css";

const Postform = () => {
    return (
        <div>
        <form>
        <div className="mb-3">
          <label htmlFor="Textarea1" className="form-label">
            Your Post
          </label>
          <textarea
            className="form-control"
            id="Textarea1"
            rows="3"
            name="body"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary" id="postSubmitButton">Submit</button>
      </form>
      </div>
    )
}

export default Postform
