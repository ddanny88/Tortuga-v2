const initailState = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    state: '',
    zipcode: '',
    address: ''
}


const GET_USERS = 'GET_USERS';
const UPDATE_USERNAME = 'UPDATE_USERNAME';
const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
const CLEAR_LOGIN_INPUT = 'CLEAR_LOGIN_INPUT';






export function updateUsername(username) {
    return {
        type: UPDATE_USERNAME,
        payload: username
    }
}
export function updataPassword(password) {
    return {
        type: UPDATE_PASSWORD,
        payload: password
    }
}

export function clearLoginInput() {
    return {
        type: CLEAR_LOGIN_INPUT,
        payload: {
            username: '',
            password: ''
        }
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
        case CLEAR_LOGIN_INPUT:
            return {
                ...state,
                username: action.payload.username,
                password: action.payload.password
            }
        default: 
            return state;
    }
}

export default userReducer;