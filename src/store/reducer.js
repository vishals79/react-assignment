const postsData = {
    posts: []
}

const reducer = (state = postsData, action) => {
    if (action.type === 'SAVE_POSTS_DATA') {
        return {
            posts: action.payload
        }
    } 
    return state;
};

export default reducer;