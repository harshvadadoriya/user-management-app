import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SignUpFormValues } from '../../interface/interfaces';
import { RootState } from '../store';

export interface UserState {
	users: SignUpFormValues | null;
}

const initialState: UserState = {
	users: null,
};

const SignupSlice = createSlice({
	name: 'signup',
	initialState,
	reducers: {
		addUser: (state, action: PayloadAction<SignUpFormValues>) => {
			state.users = action.payload;
		},
	},
});

export const { addUser } = SignupSlice.actions;
export const SignupUserData = (state: RootState) => state.signup.users;

export default SignupSlice.reducer;
