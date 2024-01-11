import { configureStore, combineReducers } from '@reduxjs/toolkit'
import IValue from '../redux/slices/valuesSlice'
import individual from '../redux/slices/individualSlice'
import family from '../redux/slices/familySlice'
import loveStory from '../redux/slices/loveStorySlice'
import wedding from '../redux/slices/weddingSlice'

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'app',
    storage,
}

const rootReducer = combineReducers({
    IValue: IValue,
    individual:individual,
    family:family,
    loveStory:loveStory,
    wedding:wedding,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>

        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})


export const persist = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch