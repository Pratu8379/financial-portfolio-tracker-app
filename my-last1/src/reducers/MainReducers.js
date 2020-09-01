// This is the initial state
let initialState = {
    color: "red"
}

// This is your reducer

const rootReducer = (state = {...initialState}, action) => {
    switch(action.type){
        case "CHANGE_COLOR":
            state = {
                ...state,
                color: action.payload.color
            }
            break;
        case "OTHER_ACTION":
            break;

    }
    return state;
}

export default rootReducer;