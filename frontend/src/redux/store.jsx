import { configureStore , combineReducers } from '@reduxjs/toolkit'

// importing persist
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import AuthSlice from "./AuthSlice";
import PostSlice from "./postSlice";
import AppSlice from "./AppSlice";

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({ 
  auth : AuthSlice,  
  posts : PostSlice,
  app : AppSlice
})
const persistedReducer = persistReducer(persistConfig, rootReducer )

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});


export const persistor = persistStore(store);