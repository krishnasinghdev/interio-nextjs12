import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
export interface themeState {
  sidebar: boolean;
  isLogin: boolean;
  viewSignup: boolean;
  viewSignin: boolean;
  showModal: boolean;
  modalFor: string;
}

const initialState: themeState = {
  sidebar: false,
  isLogin: false,
  showModal: false,
  modalFor: '',
  viewSignup: false,
  viewSignin: false,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleModal: (state, actions) => {
      const { showModal, modalType } = actions.payload;

      state.showModal = showModal;
      if (showModal) state.modalFor = modalType;
      else state.modalFor = '';
    },
    toggleSignin: (state, actions) => {
      state.viewSignin = actions.payload;
    },
    toggleSignup: (state, actions) => {
      state.viewSignin = actions.payload;
    },
    showSidebar: (state) => {
      state.sidebar = true;
    },
    hideSidebar: (state) => {
      state.sidebar = false;
    },
    setLogin: (state, actions) => {
      state.isLogin = true;
      state.viewSignin = false;
      const { vendor, token } = actions?.payload;
      if (vendor && token) {
        localStorage.setItem('vendor', vendor);
        localStorage.setItem('token', token);
      }
    },
    setLogout: (state) => {
      state.isLogin = false;
      localStorage.removeItem('vendor');
      localStorage.removeItem('token');
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  showSidebar,
  hideSidebar,
  setLogin,
  setLogout,
  toggleModal,
  toggleSignin,
} = themeSlice.actions;
export const sidebar = (state: RootState) => state.theme.sidebar;
export const isLogin = (state: RootState) => state.theme.isLogin;
export const viewSignup = (state: RootState) => state.theme.viewSignup;
export const viewSignin = (state: RootState) => state.theme.viewSignin;
export const modalFor = (state: RootState) => state.theme.modalFor;
export const showModal = (state: RootState) => state.theme.showModal;
export default themeSlice.reducer;
