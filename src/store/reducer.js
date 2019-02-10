const postsData = {
    status: 'INITIAL',
    posts: []
}

const reducer = (state = postsData, action) => {
    if (action.type === 'SAVE_POSTS_DATA') {
        return {
            status: 'RESOLVED',
            posts: action.payload
        }
    } 
    if (action.type === 'LOADING_POSTS_DATA') {
        return {
            status: 'RESOLVING'
        }
    } 
    if (action.type === 'ERROR') {
        return {
            status: 'ERROR'
        }
    } 
    return state;
};

export default reducer;