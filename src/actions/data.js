import * as api from '../api'

export const getData = () => async(dispatch) => {

    try {
        const { data } = await api.getData()    
        dispatch({ type:"FETCH_ALL" , payload: data })     
    } catch (error) {
        console.log(error)
    }
} 

export const createData = (newPost) => async(dispatch) => {
    try {
        const {data} = await api.createData(newPost)
        dispatch({ type: "CREATE", payload: data })
    } catch (error) {
        console.log(error)
    }
}


export const deleteData = (id) => async(dispatch) => {
    try {
        await api.deleteData(id)
        dispatch({type: "DELETE", payload:id})
        
    } catch (error) {
        
    }
}