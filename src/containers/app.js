import React from 'react'
import { connect } from 'react-redux';

import Comments from '../components/comments';
import AddComment from '../components/add-comment.js';

import  { addComment, onDelete } from '../actions'



let App = (props) => {
    const {comments, addComment, onDelete} = props;

    return (
        <div>
            <Comments comments={comments} onDelete={onDelete}></Comments>
            <AddComment addComment={addComment}></AddComment>
        </div>
    )
}
const mapStateProps = (state) => {
    return {
        comments: state
    }
}

const mapDispatchProps = (dispatch) => {
    return {
        addComment: (title, commentary) => dispatch(addComment(title,commentary)),
        onDelete: (id) => dispatch(onDelete(id))
    }
}

App = connect (
    mapStateProps,
    mapDispatchProps
)(App);

export default App;
