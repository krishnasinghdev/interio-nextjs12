import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
export interface themeState {
  sidebar: boolean;
  isLogin: boolean;
}

const initialState: themeState = {
  sidebar: false,
  isLogin: true,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    showSidebar: (state) => {
      state.sidebar = true;
    },
    hideSidebar: (state) => {
      state.sidebar = false;
    },
    setLogin: (state) => {
      state.isLogin = true;
    },
    setLogout: (state) => {
      state.isLogin = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { showSidebar, hideSidebar, setLogin, setLogout } =
  themeSlice.actions;
export const sidebar = (state: RootState) => state.theme.sidebar;
export const isLogin = (state: RootState) => state.theme.isLogin;
export default themeSlice.reducer;
