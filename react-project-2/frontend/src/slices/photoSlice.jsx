import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import photoService from '../service/photoService';

const initialState = {
    loading : false,
    errors : false,
    success : false,
    photo : {},
    photos: [],
    message : false
}


export const insertPhoto = createAsyncThunk('photo/insert', async(photo,thunkAPI) =>{

    const token = thunkAPI.getState().auth.user.token;

    const data = await photoService.insertPhoto(photo, token);

    if (data.errors) {
        return thunkAPI.rejectWithValue(data.errors[0]);
    }
    return data;
})


export const photoSlice = createSlice({
    name : 'photo',
    initialState,
    reducers : {
        resetMessage : (state)=>{
            state.message = null;
        }
    },
    extraReducers : (builder) =>{
        builder 
            .addCase(insertPhoto.pending, (state)=>{
                state.loading = true;
                state.message = null;
                state.errors = false;
            })
            .addCase(insertPhoto.rejected, (state, action) =>{
                state.loading = false;
                state.errors = action.payload;
                state.photo = {};
                state.success = false;
                state.message = false;
            })
            .addCase(insertPhoto.fulfilled, (state, action) =>{
                state.errors = false;
                state.loading = false;
                state.message = 'Nova foto adicionada';
                state.photo = action.payload;
                state.success = true;
            })
    }
});

export const {resetMessage} = photoSlice.actions;


export default photoSlice.reducer;