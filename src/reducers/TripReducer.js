import { ADD_TRIP,SET_SELECTED_PLACE } from '../actions/types';

const INITIAL_STATE = { tripStartPlace:'' , 
                        tripEndPlace: '',
                        tripAdded :false ,
                        selectedPlace: '' , 
                        modalVisible: false }
export default (state = INITIAL_STATE ,action ) =>{
  
    switch (action.type){
        case ADD_TRIP:
        return {...state ,tripAdded: true}
        case SET_SELECTED_PLACE:
        return { ...state, selectedPlace : payload.selectedPlace, modalVisible:false }
        default:
        return state;
    }
}