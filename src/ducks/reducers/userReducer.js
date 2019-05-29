

const initailState = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    st: '',
    zipcode: '',
    address: '',
    isLoggedIn: false
}


const UPDATE_USERNAME = 'UPDATE_USERNAME';
const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
const CLEAR_LOGIN_INPUT = 'CLEAR_LOGIN_INPUT';
const CLEAR_REGISTER_INPUT = 'CLEAR_REGISTER_INPUT';
const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME';
const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME';
const UPDATE_EMAIL = 'UPDATE_EMAIL';
const UPDATE_LOGGED_IN = 'UPDATE_LOGGED_IN';
const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_STATE = 'UPDATE_STATE';
const UPDATE_ZIPCODE = 'UPDATE_ZIPCODE';
const CLEAR_ADDRESS = 'CLEAR_ADDRESS';


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
export function clearRegisterInput() {
    return {
        type: CLEAR_REGISTER_INPUT,
        payload: {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            email: ''
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
export function updateLoggedIn(trueOrFalse) {
    return {
        type: UPDATE_LOGGED_IN,
        payload: trueOrFalse
    }
}
export function updateAddress(address) {
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}
export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}
export function updateState(state) {
    return {
        type: UPDATE_STATE,
        payload: state
    }
}
export function updateZipcode(zip) {
    return {
        type: UPDATE_ZIPCODE,
        payload: zip
    }
}
export function clearAddressInput() {
    return {
        type: CLEAR_ADDRESS,
        payload: {
            city: '',
            st: '',
            zipcode: '',
            address: ''
        }
    }
}







const userReducer = (state = initailState, action) => {
    switch (action.type) {
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
        case CLEAR_REGISTER_INPUT: 
            return {
                ...state, 
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                username: action.payload.username,
                password: action.payload.password,
                email: action.payload.email
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
        case UPDATE_LOGGED_IN: 
            return {
                ...state, 
                isLoggedIn: action.payload
            }
        case UPDATE_ADDRESS:
            return {
                ...state,
                address: action.payload
            }
        case UPDATE_CITY:
            return {
                ...state, 
                city: action.payload
            }
        case UPDATE_STATE: 
            return {
                ...state,
                st: action.payload
            }
        case UPDATE_ZIPCODE: 
            return {
                ...state,
                zipcode: action.payload
            }
        case CLEAR_ADDRESS:
            return {
                ...state, 
                city: action.payload.city,
                st: action.payload.st,
                zipcode: action.payload.zipcode,
                address: action.payload.address,
            }
        default: 
            return state;
    }
}

export default userReducer;