import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SignUpFormValues } from '../../interface/interfaces';
import { RootState } from '../store';

export interface UserState {
	users: SignUpFormValues | null;
	isLoggedIn: boolean;
}

const initialState: UserState = {
	users: null,
	isLoggedIn: false,
};

const SignupSlice = createSlice({
	name: 'userAuth',
	initialState,
	reducers: {
		addUser: (state, action: PayloadAction<SignUpFormValues>) => {
			state.users = action.payload;
			state.isLoggedIn = true;
		},
		setLoggedIn: (state, action: PayloadAction<boolean>) => {
			state.isLoggedIn = action.payload;
		},
		logout: (state) => {
			// state.users = null;
			state.isLoggedIn = false;
		},
	},
});

export const { addUser, setLoggedIn, logout } = SignupSlice.actions;
export const SignupUserData = (state: RootState) => state.signup.users;
export const isUserAuthenticated = (state: RootState) =>
	state.signup.isLoggedIn;

export default SignupSlice.reducer;
