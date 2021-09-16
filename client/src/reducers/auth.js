import * as actionType from '../constants/actionTypes';
const INITIALSTATE = {
    authData: null,
    errors: null,
    loading: false,

}
const authReducer = (state = INITIALSTATE, action) => {
    switch (action.type) {
        case actionType.AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));

            return { ...state, authData: action.data };
        case actionType.LOGOUT:
            localStorage.clear();

            return { ...state, authData: null };

        case actionType.ERROR:
            return { ...state, errors: null }



        default:
            return state;
    }
};

export default authReducer;