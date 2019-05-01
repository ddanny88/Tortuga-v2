const initailState = {
    users: [{
        name: 'Daniel'
    }]
}


const GET_USERS = 'GET_USERS';



const userReducer = (state = initailState, action) => {
    switch(action){
        case GET_USERS: 
        return {
            ...state, 
            users: initailState.users
        }
        default: 
            return state;
    }
}

export default userReducer;