import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "../service/userService";

const initialState = {
    loading: false,
    errors: false,
    message: null,
    user: {},
    success: false
}

export const profile = createAsyncThunk('user/profile', async (user, thunkAPI) => {

    const token = thunkAPI.getState().auth.user.token;

    const data = await userService.profile(user, token);

    if (data.errors) return thunkAPI.rejectWithValue(data.errors[0]);


    return data;

});

export const update = createAsyncThunk('user/update', async (user, thunkAPI) => {


    const token = thunkAPI.getState().auth.user.token;


    const data = await userService.update(user, token);

    console.log(data + 'teste');

    if (data.errors) {
        return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;

})

export const details = createAsyncThunk('user/details', async (id, thunkAPI) => {

    const data = await userService.details(id);

    return data;

})


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resetMessage: (state) => {
            state.message = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(profile.pending, (state) => {
                state.loading = true;
                state.errors = false;
                state.message = false;
                state.user = {};
                state.success = false;
            })
            .addCase(profile.fulfilled, (state, action) => {
                state.errors = false;
                state.loading = false;
                state.user = action.payload;
                state.success = true;
            })
            .addCase(profile.rejected, (state, actions) => {
                state.errors = actions.payload;
                state.loading = false;
                state.success = false;
            })
            .addCase(update.pending, (state) => {
                state.errors = false;
                state.loading = true;
            })
            .addCase(update.fulfilled, (state, action) => {

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
                state.message = false;
                state.success = false;
            })
            .addCase(details.pending, (state) => {
                state.errors = false;
                state.loading = true;
            })
            .addCase(details.fulfilled, (state, action) => {
                state.errors = false;
                state.loading = false;
                state.user = action.payload;
                state.success = true;
                state.message = false;
            })
    }
});

export const { resetMessage } = userSlice.actions;

export default userSlice.reducer;