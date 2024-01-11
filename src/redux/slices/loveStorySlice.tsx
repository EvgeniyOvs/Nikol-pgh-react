import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import axios from "axios";
import {RootState} from "../store";
import {item, Status} from "./individualSlice";

type State = {
    loveStorys: item[];
    statusLv: Status;
}


const initialState: State = {
    loveStorys: [],
    statusLv: Status.LOADING,
}
export const fetchLoveStorys = createAsyncThunk<item[]>('posts/fetchLoveStorys', async () => {
    const {data} = await  axios.get<item[]>('http://localhost:3002/loveStory')
    return data;
})

const loveStorysSlice = createSlice({
    name: 'loveStory',
    initialState,

    reducers: {

    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchLoveStorys.pending, (state, action) => {
            // Add user to the state array
            state.statusLv = Status.LOADING;
            state.loveStorys =[];
        })
        builder.addCase(fetchLoveStorys.fulfilled, (state, action) => {
            // Add user to the state array
            state.loveStorys = action.payload;
            state.statusLv = Status.SUCCESS;
        })
        builder.addCase(fetchLoveStorys.rejected, (state, action) => {
            // Add user to the state array
            state.statusLv = Status.ERROR,
                state.loveStorys =[];
        })
    },
})

export const selectLoveStorys = (state: RootState) => state.loveStory;

export const {  } = loveStorysSlice.actions;
export default loveStorysSlice.reducer;