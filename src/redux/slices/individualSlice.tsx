import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import axios from "axios";
import {RootState} from "../store";

export interface item {
    id: number,
    mainImage: string,
    title: string,
}

type State = {
    individual: item[];
    statusInd: Status;
}


export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

export const fetchIndividuals = createAsyncThunk<item[]>('posts/fetchIndividuals', async () => {
    const {data} = await  axios.get<item[]>('http://localhost:3002/individual')
    return data;
})

const initialState: State = {
    individual: [],
    statusInd: Status.LOADING,
}

const individualsSlice = createSlice({
    name: 'individual',
    initialState,

    reducers: {

    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchIndividuals.pending, (state, action) => {
            // Add user to the state array
            state.statusInd = Status.LOADING;
            state.individual =[];
        })
        builder.addCase(fetchIndividuals.fulfilled, (state, action) => {
            // Add user to the state array
            state.individual = action.payload;
            state.statusInd = Status.SUCCESS;
        })
        builder.addCase(fetchIndividuals.rejected, (state, action) => {
            // Add user to the state array
            state.statusInd = Status.ERROR,
                state.individual =[];
        })
    },
})

export const selectIndividuals = (state: RootState) => state.individual;

export const {  } = individualsSlice.actions;
export default individualsSlice.reducer;