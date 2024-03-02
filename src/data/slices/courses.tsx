import {createSlice,PayloadAction} from '@reduxjs/toolkit'

const initialState = {
    addedItems:{} as Record <number,number>,
}

const slice=createSlice({
    name:'courses',
    initialState:initialState,
    reducers:{
         handleAddedItems(state,action:PayloadAction<{courseId:number,type:'add' | 'remove'}>){
             const {courseId,type}= action.payload
                if (type === "add"){
                    state.addedItems[courseId]=1
                }
                else if (type==="remove"){
                    delete state.addedItems[courseId]
                }
        }
    }
})
export const {handleAddedItems}= slice.actions
export const reducer=slice.reducer
export default slice