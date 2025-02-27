
import {configureStore} from '@reduxjs/toolkit'
import authReducer from './slices/authSlice.jsx';
import userReducer from './slices/userSlice.jsx';



export const store = configureStore({
    reducer : {
        auth : authReducer,
        user : userReducer
    }
});