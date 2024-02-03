    import { createSlice } from "@reduxjs/toolkit";

    const prepBytes = createSlice({
        name: "PrepBytesClone",
        initialState: {
            username:"",
            email:""
        },
        reducers: {
            setUser: (state, action) => {
                console.log(action)
                 localStorage.setItem("username",action.payload.username)
                 localStorage.setItem("email",action.payload.email)
                state.username=localStorage.getItem("username")
                state.email=localStorage.getItem("email")
            },
            getUser: async(state, action) => {
                 state.username=localStorage.getItem("username")
                 state.email=localStorage.getItem("email")
            }
        }
    })
    // export const {setUser, getUser } = prepBytes.actions
    export const getUser=prepBytes?.actions?.getUser
    export const setUser=prepBytes?.actions?.setUser
    console.log(getUser)
    export default prepBytes.reducer