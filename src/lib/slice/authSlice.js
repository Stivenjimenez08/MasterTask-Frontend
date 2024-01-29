import axios from "axios";
import Cookies from "js-cookie";
import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";

export const fetchLogin = createAsyncThunk('auth/login', async(formData) =>{
    try {
        const response = await axios.post(`${import.meta.env.VITE_URL_SERVER}api/auth/login`, formData)
        Cookies.set('token', response.data.token, {expires: 1})
        return response.data
    } catch (error) {
        return isRejectedWithValue(error)
    }
})

export const fetchLogout = createAsyncThunk('auth/logout', async() =>{
    try {
        const response = await axios.post(`${import.meta.env.VITE_URL_SERVER}api/auth/logout`,{}, {
            headers:{
                'x-token': Cookies.get('token')
            }
        })
        Cookies.remove('token')
        return response.data
    } catch (error) {
        return isRejectedWithValue(error)
    }
})

export const fetchValidateToken = createAsyncThunk('auth/validateToken', async() =>{
    try {
        const response = await axios.post(`${import.meta.env.VITE_URL_SERVER}api/auth/validate-token`,{}, {
            headers:{
                'x-token': Cookies.get('token')
            }
        })
        return response.data
    } catch (error) {
        return isRejectedWithValue(error)
    }
})

const initialState = {
    user: null,
    loading: true
}

const authSlice = createSlice ({

    name: 'auth',
    initialState,
    reducers:{
        setLogin: (state, action) => {

            state.user = action.payload;
            state.loading = false
        }
    },
    extraReducers: (builder) =>{
        builder
            .addCase(fetchLogin.fulfilled, (state, action)=>{
                state.user = action.payload.login
                state.loading = false

            })
            .addCase(fetchLogin.rejected, (state) =>{
                state.user = null
                state.loading = false
            })
            .addCase(fetchLogout.fulfilled, (state, action)=>{
                state.user = null
                state.loading = false

            })
            .addCase(fetchLogout.rejected, (state) =>{
                state.user = null
                state.loading = false
            })
            .addCase(fetchValidateToken.fulfilled, (state, action)=>{
                state.user = action.payload.user
                state.loading = false

            })
            .addCase(fetchValidateToken.rejected, (state) =>{
                state.user = null
                state.loading = false
            })
    }
})

export const {setLogin} = authSlice.actions

export default authSlice.reducer