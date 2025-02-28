import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import userService from "../service/userService";

const initialState = {
    loading : false,
    errors : false,
    message : null,
    user : {},
    success : false
}

export const profile = createAsyncThunk('user/profile', async (user, thunkAPI) =>{

    const token = thunkAPI.getState().auth.user.token;
    
    const data = await userService.profile(user, token);
    
    return data;

});

export const update = createAsyncThunk('user/update',async (user, thunkAPI)=>{

    
    const token = thunkAPI.getState().auth.user.token; 

    
    const data = await userService.update(user, token);

    console.log(data+ 'teste');
    
    if (data.errors) {
        return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
    
})

export const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        resetMessage : (state) =>{
            state.message = null;
        }
    },
    extraReducers :(builder) =>{
        builder
            .addCase(profile.pending , (state) =>{
                state.loading = true;
                state.errors = false;
                state.message = null;
                state.user = {};
                state.success = false;
            })
            .addCase(profile.fulfilled, (state,action) =>{
                state.errors = false;
                state.loading = false;
                state.user = action.payload;
                state.success = true;
                state.message = null;  
            })
            .addCase(update.pending, (state) =>{
                state.errors = false;
                state.loading = true;
            })
            .addCase(update.fulfilled,(state, action) =>{
                state.errors = false;
                state.success = true;
                state.user = action.payload;
                state.message = "Usuário Atualizadp com sucesso";
                state.loading = false;
            })
            .addCase(update.rejected, (state, action) => {
                state.errors = action.payload;
                state.user = {};
                state.loading = false;
                state.message = null;
                state.success = false;
            })
    }
});

export const {resetMessage} = userSlice.actions;

export default userSlice.reducer;