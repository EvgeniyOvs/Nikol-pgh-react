import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import axios from "axios";
import {RootState} from "../store";
import {item, Status} from "./individualSlice";

type State = {
    weddings: item[];
    statusWd: Status;
}


const initialState: State = {
    weddings: [],
    statusWd: Status.LOADING,
}
export const fetchWeddings = createAsyncThunk<item[]>('posts/fetchWeddings', async () => {
    const {data} = await  axios.get<item[]>('http://localhost:3002/wedding')
    return data;
})

const weddingsSlice = createSlice({
    name: 'wedding',
    initialState,

    reducers: {

    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchWeddings.pending, (state, action) => {
            // Add user to the state array
            state.statusWd = Status.LOADING;
            state.weddings =[];
        })
        builder.addCase(fetchWeddings.fulfilled, (state, action) => {
            // Add user to the state array
            state.weddings = action.payload;
            state.statusWd = Status.SUCCESS;
        })
        builder.addCase(fetchWeddings.rejected, (state, action) => {
            // Add user to the state array
            state.statusWd = Status.ERROR,
                state.weddings =[];
        })
    },
})

export const selectWeddings = (state: RootState) => state.wedding;

export const {  } = weddingsSlice.actions;
export default weddingsSlice.reducer;