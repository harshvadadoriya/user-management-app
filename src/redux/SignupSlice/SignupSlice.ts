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
	name: 'signup',
	initialState,
	reducers: {
		addUser: (state, action: PayloadAction<SignUpFormValues>) => {
			state.users = action.payload;
			state.isLoggedIn = true;
		},
	},
});

export const { addUser } = SignupSlice.actions;
export const SignupUserData = (state: RootState) => state.signup.users;
export const isLoggedIn = (state: RootState) => state.signup.isLoggedIn;

export default SignupSlice.reducer;
