import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    query:'',
    activeTabs:'photos',
    results:[],
    loding:false,
    error:null
}

export const searchSlice = createSlice({
    name:"search",
    initialState,


    reducers:{
        setQuery(state, action){
            state.query = action.payload
        },

        setActiveTabs(state, action){
            state.activeTabs = action.payload
        },

        setResults(state, action){
            state.results = action.payload
            state.loding = false
        },

        setLoading(state, action){
            state.loding = true
            state.error = null
        },

        setError(state, action){
            state.error = action.error
            state.loding = false
        },

        clearReasults(state){
            state.results = []
        }
    }
})


export const {setQuery, setActiveTabs, setResults, setLoading, setError, clearReasults} = searchSlice.actions

export default searchSlice.reducer