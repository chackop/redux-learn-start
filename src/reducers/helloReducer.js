import { PRESSED_HELLO } from '../actions/types'
const initialState = {
    helloText: 'Hello!',
    pressedButton: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case PRESSED_HELLO:
            return {
                ...state,
                pressedButton: true, 
                // helloText: 'You pressed the button'
            }
        default:
            return state;
    }
}