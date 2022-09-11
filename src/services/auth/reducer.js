import { Map } from 'immutable'

const initialState = Map({
    isAuthorized: false,
})

const authReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        default:
            return state
    }
}

export default authReducer
