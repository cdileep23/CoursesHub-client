import { createSlice } from "@reduxjs/toolkit";

const storageKey = "vite-ui-theme";
const getInitialTheme = () =>  "system";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: getInitialTheme(),
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem(storageKey, action.payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
