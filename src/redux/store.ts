import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import SignupReducer from './SignupSlice/SignupSlice';
import { combineReducers } from '@reduxjs/toolkit';
import {
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import sessionStorage from 'redux-persist/es/storage/session';

const persistConfig = {
	key: 'root',
	version: 1,
	storage: sessionStorage,
};

const reducer = combineReducers({
	signup: SignupReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
	}),
});

// Getting the State type
export type RootState = ReturnType<typeof store.getState>;
// Getting the Dispatch type
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
