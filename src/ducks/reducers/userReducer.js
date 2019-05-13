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
const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME';
const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME';
const UPDATE_EMAIL = 'UPDATE_EMAIL';





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
export function updateFirstName(firstName) {
    return {
        type: UPDATE_FIRST_NAME,
        payload: firstName
    }
}
export function updateLastName(lastName) {
    return {
        type: UPDATE_LAST_NAME,
        payload: lastName
    }
}
export function updateEmail(email) {
    return {
        type: UPDATE_EMAIL,
        payload: email
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
        case UPDATE_FIRST_NAME:
            return {
                ...state,
                firstName: action.payload
            }
        case UPDATE_LAST_NAME:
            return {
                ...state, 
                lastName: action.payload
            }
        case UPDATE_EMAIL:
            return {
                ...state, 
                email: action.payload
            }
        default: 
            return state;
    }
}

export default userReducer;