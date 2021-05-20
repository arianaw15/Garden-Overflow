import React from 'react';
import "./index.css";

const Postform = () => {
    return (
        <div className="formtainer">
        <form>
        <div className="mb-3">
          <label htmlFor="Textarea1" className="form-label">
            Your Post
          </label>
          <textarea
            className="form-control"
            id="Textarea1"
            rows="1"
            name="title"
          ></textarea>
        </div>
        
        <select className="form-select" aria-label="TagSelect" name="tag">
          <option selected>What type of post is this?</option>
          <option value="Question">Question</option>
          <option value="Request">Request</option>
          <option value="Article">Article</option>
          <option value="Advice">Advice</option>
          <option value="Rant">Rant</option>
          <option value="GardenBrag">GardenBrag</option>
        </select>
        <div className="mb-3">
          <label for="Textarea2" className="form-label">
            Your Post's Content
          </label>
          <textarea
            className="form-control"
            id="Textarea2"
            rows="2"
            name="body"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary" id="postSubmitButton">Submit</button>
      </form>
    </div>
  );
};

export default Postform;
