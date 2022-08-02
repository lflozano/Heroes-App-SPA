import { types } from "../types/types";

// NO LLAMAR NADA DEL LOCAL STORAGE DENTRO DEL REDUCER, 
// ESTOS SON FUNCIONES PURAS Y NO DEBEN DE TENER NADA 
// DE FUNCIONES EXTERNAS ADENTRO

export const authReducer = ( state = {}, action ) => {


    switch ( action.type ) {
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload
            }
        
        case types.logout:
            return {
                logged: false,
            }

        default:
            return state;
    }
}