import { AUTH, ERROR } from '../constants/actionTypes';
import * as api from '../api/index.js';
import { Redirect } from 'react-router';
export const signin = (formData, router) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data });

        router.push('/');
    } catch (error) {
        console.log(error);
        dispatch({ type: ERROR, error })
        // return <Redirect to='/auth'></Redirect>
        //
    }
};

export const signup = (formData, router) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data });

        router.push('/');
    } catch (error) {
        console.log(error);
    }
};