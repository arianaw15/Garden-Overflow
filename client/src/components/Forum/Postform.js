import React from 'react';
import "./index.css";

const Postform = ({zone, username}) => {

  function refreshPage() {
    window.location.reload();
  };

    return (
        <div className="formtainer">
        <form action="/api/addpost" method="POST" onSubmit={refreshPage}>
        <div className="mb-3">
          <label htmlFor="Textarea1" className="form-label">
            Post Subject:
          </label>
          <textarea
            className="form-control"
            id="Textarea1"
            rows="1"
            name="title"
          ></textarea>
        </div>
        <input type="hidden" name="zone" value={zone}></input>
        <input type="hidden" name="userName" value={username}></input>
        {/* <select className="form-select" aria-label="TagSelect" name="tag"> */}
        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" name="tag">
          <option selected>What type of post is this?</option>
          <option value="Question">Question</option>
          <option value="Request">Request</option>
          <option value="Article">Article</option>
          <option value="Advice">Advice</option>
          <option value="Rant">Rant</option>
          <option value="GardenBrag">GardenBrag</option>
          </select>
        {/* </select> */}
        <div className="mb-3">
          <label for="Textarea2" className="form-label">
            Post Content:
          </label>
          <textarea
            className="form-control"
            id="Textarea2"
            rows="2"
            name="body"
          ></textarea>
        <button type="submit" className="btn btn-primary" id="postSubmitButton">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Postform;
