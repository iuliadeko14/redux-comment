import React from 'react';

const Comments = (props) => {
  const { comments, onDelete } = props;
  return (
    <ul>
      {
        comments.map((comment) => {
          return (
            <li
              key={comment.id}
            >
              <span className="author">{comment.title}</span>
              <span className="date">{comment.date}</span>
              <button className="button_exit"
                onClick={ev => onDelete(comment.id)}
              ></button>
              <p className="text">{comment.commentary}</p>
            </li>
          )
        })
      }
    </ul>
  );
}


export default Comments;