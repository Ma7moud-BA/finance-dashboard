import { create } from "zustand";

type NewAccountState = {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
};

// a hook that is responsible to open and close the create new account sheet across the app
export const useNewAccount = create<NewAccountState>((set) => ({
	isOpen: false,
	onOpen: () => {
		set({ isOpen: true });
	},
	onClose: () => {
		set({ isOpen: false });
	},
}));
