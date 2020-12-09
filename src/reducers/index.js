const comments = (state = [], action) => {
    switch (action.type) {
        case 'ADD_COMMENTS':
            return [
                ...state,
                {id: action.id, title: action.title, commentary: action.commentary, date: action.date }
            ]
            case 'ON_DELETE':
                    for (var i = 0; i < state.length; i++) {
                        if (state[i].id === action.id) {
                          state.splice(i, 1);
                        }
                    }
                    return state.map(comment => {
                        return comment;
                      });
            default: 
            return state;
    }
}
export default comments;