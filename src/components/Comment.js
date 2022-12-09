import React, { useState } from 'react';
import './Comment.css';

export const Comment = ({comment}) => {
  return (
    <p className="comment">{comment.fields.Comment}</p>
  );
}
      