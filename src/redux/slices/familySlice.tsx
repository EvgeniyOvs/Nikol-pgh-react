import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import axios from "axios";
import {RootState} from "../store";
import {item, Status} from "./individualSlice";

type State = {
    familys: item[];
    statusFM: Status;
}


const initialState: State = {
    familys: [],
    statusFM: Status.LOADING,
}
export const fetchFamilys = createAsyncThunk('posts/fetchFamilys', async () => {
    const {data }= await  axios.get('http://localhost:3002/family')
    return data;
})

const familysSlice = createSlice({
    name: 'family',
    initialState,

    reducers: {

    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchFamilys.pending, (state, action) => {
            // Add user to the state array
            state.statusFM = Status.LOADING;
            state.familys =[];
        })
        builder.addCase(fetchFamilys.fulfilled, (state, action) => {
            // Add user to the state array
            state.familys = action.payload;
            state.statusFM = Status.SUCCESS;
        })
        builder.addCase(fetchFamilys.rejected, (state, action) => {
            // Add user to the state array
            state.statusFM = Status.ERROR,
                state.familys =[];
        })
    },
})

export const selectFamilys = (state: RootState) => state.family;

export const {  } = familysSlice.actions;
export default familysSlice.reducer;