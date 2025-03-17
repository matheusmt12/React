import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import photoService from '../service/photoService';

const initialState = {
    photos: [],
    photo: {},
    loading: false,
    errors: false,
    success: false,
    message: false
};


export const insertPhoto = createAsyncThunk('photo/insert', async (photo, thunkAPI) => {

    const token = thunkAPI.getState().auth.user.token;

    const data = await photoService.insertPhoto(photo, token);

    if (data.errors) {
        return thunkAPI.rejectWithValue(data.errors[0]);
    }
    return data;
});

export const getAllPhotosUser = createAsyncThunk('photos/getAllPhotosUser', async (id, thunkAPI) => {

    let token = thunkAPI.getState().auth.user.token;

    const data = await photoService.getAllPhotosUser(id, token);

    return data;
});

export const deletePhoto = createAsyncThunk('photo/delete', async (id, thunkAPI) => {

    const token = thunkAPI.getState().auth.user.token;

    const data = await photoService.deletePhoto(id, token);

    if (data.errors) {
        return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data;

});

export const updatePhoto = createAsyncThunk('photo/update', async (data, thunkAPI) => {

    let token = thunkAPI.getState().auth.user.token;



    const photo = await photoService.updatePhoto({ title: data.title }, data.id, token);

    if (photo.erros) return thunkAPI.rejectWithValue(photo.erros[0]);

    return photo;

});

export const getPhotoId = createAsyncThunk('photo/id', async (id, thunckAPI) => {

    let token = thunckAPI.getState().auth.user.token;

    const data = await photoService.getPhotoId(id, token);

    if (data.errors) {
        return thunckAPI.rejectWithValue(data.errors[0]);
    }

    return data;
});

export const photoLike = createAsyncThunk('photo/like', async (id, thunckAPI) => {

    let token = thunckAPI.getState().auth.user.token;
    
    const data = await photoService.photoLike(id, token);

    
    if (data.errors) return thunckAPI.rejectWithValue(data.errors[0]);

    return data;
});


export const photoComment = createAsyncThunk('photo/comment', async(data, thunckAPI) =>{

    let token = thunckAPI.getState().auth.user.token;

    const photo = await photoService.photoComment({comment : data.comment}, data.id, token);

    if (photo.errors) {
        return thunckAPI.rejectWithValue(data.errors[0]);
    }

    
    return photo;

});

export const getAllPhotos = createAsyncThunk('photo/all', async (_,thunckAPI) =>{

    
    const token = thunckAPI.getState().auth.user.token;

    const data = await photoService.getAllPhotos(token)
    
    return data;

});

export const searchPhotos =createAsyncThunk('photo/search', async(query, thunckAPI)=>{

    const token = thunckAPI.getState().auth.user.token;

    const data = await photoService.searchPhotos(query, token);
    
    return data;

})

export const photoSlice = createSlice({
    name: 'photo',
    initialState,
    reducers: {
        resetMessage: (state) => {
            state.message = false;
            state.success = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(insertPhoto.pending, (state) => {
                state.loading = true;
                state.message = false;
                state.errors = false;
            })
            .addCase(insertPhoto.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload;
                state.photo = {};
                state.success = false;
                state.message = false;
            })
            .addCase(insertPhoto.fulfilled, (state, action) => {
                state.errors = false;
                state.loading = false;
                state.message = 'Nova foto adicionada';
                state.photo = action.payload;
                state.photos.unshift(state.photo)
                state.success = true;
            })
            .addCase(getAllPhotosUser.pending, (state) => {
                state.errors = false;
                state.loading = true;
            })
            .addCase(getAllPhotosUser.rejected, (state, action) => {
                state.errors = action.payload;
                state.loading = false;
                state.photo = {};
                state.photos = [];
                state.success = false;
            })
            .addCase(getAllPhotosUser.fulfilled, (state, action) => {
                state.errors = false;
                state.loading = false;
                state.message = false;
                state.photos = action.payload;
            })
            .addCase(deletePhoto.pending, (state) => {
                state.errors = false;
                state.loading = true;
            })
            .addCase(deletePhoto.fulfilled, (state, action) => {
                state.errors = false;
                state.message = "Imagem deletada";
                state.success = true;
                state.loading = false;

                state.photos = state.photos.filter((photo) => {
                    return photo._id !== action.payload.id;
                });
            })
            .addCase(deletePhoto.rejected, (state, action) => {
                state.errors = action.payload;
                state.loading = false;
                state.success = false;
            })
            .addCase(updatePhoto.pending, (state) => {
                state.errors = false;
                state.loading = true;
            })
            .addCase(updatePhoto.fulfilled, (state, action) => {

                state.errors = false;
                state.loading = false;
                state.message = "Foto atualizada";
                state.success = true;
                state.photos.map((photo) => {

                    if (photo._id === action.payload._id) {
                        return photo.title = action.payload.title;
                    }
                    return photo;
                })
            })
            .addCase(getPhotoId.pending, (state) => {
                state.loading = true;
                state.errors = false;
            })
            .addCase(getPhotoId.fulfilled, (state, actions) => {
                state.loading = false.value;
                state.errors = false;
                state.photo = actions.payload
            })
            .addCase(photoLike.pending, (state) => {
                state.loading = true;
                state.errors = false;
            })
            .addCase(photoLike.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload;
                state.success = false;
            })
            .addCase(photoLike.fulfilled, (state, actions) => {
                state.errors = false;
                state.loading = false;

                if (state.photo.likes) {
                    state.photo.likes.push(actions.payload.idUser);
                }
                state.photos.map((p) => {
                    if (state.photo._id === actions.payload.idPhoto) {
                        return p.likes.push(actions.payload.idUser);
                    }
                    return p;
                })
                state.message = actions.payload.message;
            }).addCase(photoComment.pending, (state) =>{
                state.errors = false;
                state.loading = true;
            })
            .addCase(photoComment.rejected , (state, actions) =>{
                state.errors = actions.payload;
                state.loading = false;
                state.success = false;
            })
            .addCase(photoComment.fulfilled, (state , actions) =>{
                state.errors = false;
                state.loading = false;
                state.message = actions.message;
                state.photo.comments.push(actions.payload.comment);
            })
            .addCase(getAllPhotos.pending, (state) =>{
                state.loading = true;
                state.errors = false;
            })
            .addCase(getAllPhotos.fulfilled,(state,actions) => {
                state.errors = false;
                state.loading = false;
                state.photos = actions.payload;
                state.message = false;
            })
            .addCase(searchPhotos.pending, (state) =>{
                state.loading = true;
                state.errors = false;
            })
            .addCase(searchPhotos.fulfilled,(state,actions) => {
                state.errors = false;
                state.loading = false;
                state.photos = actions.payload;
                state.message = false;
            })
    }
});

export const { resetMessage } = photoSlice.actions;


export default photoSlice.reducer;