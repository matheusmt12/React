import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import photoService from '../service/photoService';

const initialState = {
    photos: [],
    photo : {},
    loading : false,
    errors : false,
    success : false,
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

export const getAllPhotosUser = createAsyncThunk('photos/getAllPhotosUser', async(id,thunkAPI) =>{

    let token = thunkAPI.getState().auth.user.token;

    const data = await photoService.getAllPhotosUser(id,token);
    
    return data;
})

export const deletePhoto = createAsyncThunk('photo/delete',async(id, thunkAPI) =>{

    const token = thunkAPI.getState().auth.user.token;

    const data = await photoService.deletePhoto(id, token);

    if (data.errors) {
        return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data;

})


export const photoSlice = createSlice({
    name : 'photo',
    initialState,
    reducers : {
        resetMessage : (state)=>{
            state.message = null;
            state.success = false;
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
                state.photos.unshift(state.photo)
                state.success = true;
            })
            .addCase(getAllPhotosUser.pending, (state) =>{
                state.errors = false;
                state.loading = true;
            })
            .addCase(getAllPhotosUser.rejected, (state, action) =>{
                state.errors = action.payload;
                state.loading = false;
                state.photo = {};
                state.photos = [];
                state.success = false;
            })
            .addCase(getAllPhotosUser.fulfilled, (state,action) =>{
                state.errors = false;
                state.loading = false;
                state.message = null;
                state.photos = action.payload;
            })
            .addCase(deletePhoto.pending , (state) =>{
                state.errors = false;
                state.loading = true;
            })
            .addCase(deletePhoto.fulfilled, (state, action)=>{
                state.errors = false;
                state.message = "Imagem deletada";
                state.success = true;
                state.loading = false;
                
                state.photos = state.photos.filter((photo) => {
                    return photo._id !== action.payload.id;
                  });
            })
            .addCase(deletePhoto.rejected, (state, action) =>{
                state.errors = action.payload;
                state.loading = false;
                state.success = false; 
            } )
    }
});

export const {resetMessage} = photoSlice.actions;


export default photoSlice.reducer;