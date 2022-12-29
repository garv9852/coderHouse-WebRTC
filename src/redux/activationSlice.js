import { createSlice } from '@reduxjs/toolkit'

const initialState={
        name:"",
        avatar:""
    }

export const activationSlice = createSlice({
    name:'activation',
    initialState,
    reducers:{
        setNam:(state,action)=>{
            const name=action.payload;
            state.name=name;
        },
        setAvatar:(state,action)=>{
            const avatar=action.payload;
            state.avatar=avatar;
        }
  },
})

export const { setNam, setAvatar}= activationSlice.actions

export default activationSlice.reducer