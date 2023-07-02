import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mode: "light"
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggle: (state) => {
        const theme = (state.mode == 'light') ? 'dark': 'light'
        state.mode = theme
    }
  },
})

export const { toggle } = themeSlice.actions

export default themeSlice.reducer

