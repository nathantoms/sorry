import React from 'react';
import { Comment } from './Comment';
import './CommentList.css';

export const CommentList = ({comments}) => {
  return (
    <div className="comment-list-container">
      <div>Comments ({comments.length})</div>
      {comments &&
        comments.map(comment => (
          <Comment comment={comment}/>
        ))
      }
    </div>
  );
}
      