
const ADD_POST = 'ADD_POST'
const DELETE_POST = 'DELETE_POST'

export const createPost = (post) => {
    return {
        type: ADD_POST,
        post
    }
    
}

export const deletePost = (id) =>{
    return {
        type: DELETE_POST,
        id
    }
}

