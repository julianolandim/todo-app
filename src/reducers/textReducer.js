import {SET_TEXT} from "../actions";


function textReducer(state = "", action) {
    switch (action.type) {
        case SET_TEXT :
            return action.payload
        default :
            return state;
    }

}

export default textReducer;
