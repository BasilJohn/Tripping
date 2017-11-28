import { ADD_TRIP,UPDATE_SELECTED_PLACE, SHOW_MODAL } from '../actions/types';

const INITIAL_STATE = { tripStartPlace:'' , 
                        tripEndPlace: '',
                        tripAdded :false ,
                        selectedPlace: '' , 
                        modalVisible: false }
export default (state = INITIAL_STATE ,action ) =>{
  
    switch (action.type){
        case ADD_TRIP:
        return {...state ,tripAdded: true}
        case UPDATE_SELECTED_PLACE:
        return { ...state, tripStartPlace : action.tripStartPlace, tripEndPlace:action.tripEndPlace, modalVisible:false }
        case SHOW_MODAL:
        return { ...state, modalVisible:action.payload }
        default:
        return state;
    }
}