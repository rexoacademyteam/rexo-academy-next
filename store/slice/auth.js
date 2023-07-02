import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loggedIn: false,
  loaded: false,
  profile: {}
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginGuest: (state) => {
        state.loaded = true
        state.loggedIn = false
    },
    loginUser: (state, action) => {
        const user = action.payload
        state.profile = user
        state.loggedIn = true
        state.loaded = true
    },
    logoutUser: (state, action) => {
        state.loggedIn = false
        state.profile = {}
        state.loaded = true
    }
  },
})

export const { loginGuest, loginUser, logoutUser } = authSlice.actions

export default authSlice.reducer

