
const initailState = {
    username: '',
    password: ''
}


const GET_USERS = 'GET_USERS';
const UPDATE_USERNAME = 'UPDATE_USERNAME';
const UPDATE_PASSWORD = 'UPDATE_PASSWORD';







export function updateUsername(username){
    return {
        type: UPDATE_USERNAME,
        payload: username
    }
}
export function updataPassword(password){
    return {
        type: UPDATE_PASSWORD,
        payload: password
    }
}

const userReducer = (state = initailState, action) => {
    switch(action.type){
        case GET_USERS: 
            return {
                ...state, 
                users: initailState.users
            }
        case UPDATE_USERNAME: 
            return {
                ...state,
                username: action.payload
            }
        case UPDATE_PASSWORD:
            return {
                ...state,
                password: action.payload
            }
        default: 
            return state;
    }
}

export default userReducer;