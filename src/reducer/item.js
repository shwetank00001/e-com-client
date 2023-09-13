export default function( state = [], action ){
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload
            
        case 'CREATE':
            return [...state, action.payload]
            
        case "DELETE":
            return state.filter((item) => item._id !== action.payload)

        default:
            return state
    }
}