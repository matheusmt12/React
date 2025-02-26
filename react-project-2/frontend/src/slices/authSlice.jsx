import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../service/authService';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    user: user ? user : null,
    errors: false,
    success: false,
    loading: false
}

export const register = createAsyncThunk('auht/register', async (user, thunkAPI) => {

    const data = await authService.register(user);

    if (data.errors) {
        //verificar se os erros estao como uma lista 
        return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data;

});


export const logout = createAsyncThunk('auth/logout', async () =>{
    await authService.logout();
})


export const login = createAsyncThunk('auth/login', async (user, thunkAPI) =>{

    const data = await authService.login(user);

    if(data.errors){
        return thunkAPI.rejectWithValue(data.errors[0]);
    }
    return data;
})


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.errors = false;
            state.loading = false;
            state.success = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(register.pending, (state) =>{
            state.loading = true;
            state.errors = false
        }).addCase(register.fulfilled, (state, action) =>{
            state.loading = false;
            state.success = true;
            state.errors = null;
            state.user = action.payload;
        }).addCase(register.rejected, (state, action) =>{
            state.loading = false;
            state.errors = action.payload;
            state.user = null;
        })
        .addCase(logout.fulfilled, (state) =>{
            state.errors = null;
            state.loading = false;
            state.success = true;
            state.user = null;
        })
        .addCase(login.pending, (state) =>{
            state.loading = true;
            state.errors= false;
        })
        .addCase(login.fulfilled, (state, action) =>{
            state.errors = false;
            state.loading = false;
            state.success = true;
            state.user = action.payload;
        })
        .addCase(login.rejected, (state,action) =>{
            state.errors = action.payload;
            state.loading = false;
            state.user = null;
            state.success = false;
        })
    }

})


export const {reset} = authSlice.actions;
export default authSlice.reducer;