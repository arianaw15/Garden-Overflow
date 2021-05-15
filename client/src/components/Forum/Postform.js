import React from 'react'

const Postform = () => {
    return (
        <form>
        <div className="mb-3">
          <label for="Textarea1" className="form-label">
            Your Post
          </label>
          <textarea
            className="form-control"
            id="Textarea1"
            rows="3"
            name="body"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
}

export default Postform
