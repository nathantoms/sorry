import React, { useState } from 'react';
import './CommentForm.css';
import { addComment } from '../services/AirtableService';

export const CommentForm = ({apologyId}) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [commentForm, setCommentForm] = useState("")

  const checkFormValidity = (formValue) => {
    return (formValue && formValue != "")
  }

  const handleCommentChange = (e) => {
    const value = e.target.value.trim();
    setFormIsValid(checkFormValidity(value));
    setCommentForm(value);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    e.target.reset()
    await addComment(apologyId, commentForm);
  };

  return (
    <form className="form-inline make-actually-inline" onSubmit={submitForm}>
      <div className="form-group mx-sm-3 mb-2">
        <input type="text" className="form-control comment-box" id="inputAggrieved" placeholder="Vent here" onChange={handleCommentChange} />
      </div>
      <button type="submit" className="btn btn-primary mb-2" disabled={!formIsValid}>Submit</button>
    </form>
  );
}
      