import { createSlice } from "@reduxjs/toolkit";
 
const prepBytes = createSlice({
    name: "PrepBytesClone",
    initialState: {
        username: localStorage.getItem("username") || "",
        email: localStorage.getItem("email") || "",
    },
    reducers: {
        setUser: (state, action) => {
            localStorage.setItem("username", action.payload.username);
            localStorage.setItem("email", action.payload.email);
            state.username = action.payload.username;
            state.email = action.payload.email;
        },
        getUser: (state) => {
            state.username = localStorage.getItem("username") || "";
            state.email = localStorage.getItem("email") || "";
        },
    },
})
export const { setUser, getUser } = prepBytes.actions
// export const getUser = prepBytes?.actions?.getUser
// export const setUser = prepBytes?.actions?.setUser
// console.log(getUser)
export default prepBytes.reducer;