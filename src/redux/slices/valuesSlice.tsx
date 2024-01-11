import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "../store";


type State = {
    isQuantity: number;
}

const initialState : State = {
    isQuantity: 8,

};

const valuesSlice = createSlice({
    name: 'values',
    initialState,

    reducers: {
        setFormValue(state, action:PayloadAction<number>) {
            state.isQuantity= action.payload;
        },
    }
})

export const selectValues = (state: RootState) => state.IValue;

export const {  setFormValue} = valuesSlice.actions;
export default valuesSlice.reducer;