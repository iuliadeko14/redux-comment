let nextCommentId = 4;

export const addComment = (commentary, title) => {
  let date = new Date();
  let month = date.getMonth() + 1;
  let dateString = date.getDate() + '-' + month + '-' + date.getFullYear();
  return {
    type: 'ADD_COMMENT',
    id: nextCommentId++,
    commentary: commentary.replace(/<(.*?)>/g, ""),
    title: title.replace(/<(.*?)>/g, ""),
    date: dateString
  }
}

export const onDelete = (id) => {
  return {
    type: 'ON_DELETE',
    id: id
  }
}
