import React, { createContext, useContext, useReducer } from 'react';

const FormContext = createContext();

const initialState = {
    userName: '',
    email: '',
    phone: '',
    plan: {
        id: null,
        title: '',
        price: 0,
        billing: ''
    },
    addOns: []
}



function formReducer(state, action) {
    switch (action.type) {
        case 'UPDATE_FIELD':
            return { ...state, [action.field]: action.value };
        case 'UPDATE_PLAN':
            return { ...state, plan: action.plan };
        case 'TOGGLE_ADDON':
            const exists = state.addOns.some(a => a.id === action.addOn.id);
            return {
                ...state,
                addOns: exists
                    ? state.addOns.filter(a => a.id !== action.addOn.id)
                    : [...state.addOns, action.addOn]
            };
        case 'RESET':
            return initialState;
        default:
            return state;

    }
}


export function FormProvider({ children }) {
    const [state, dispatch] = useReducer(formReducer, initialState)
    return (
        <FormContext.Provider value={{ formData: state, dispatch }}>
            {children}
        </FormContext.Provider>
    )
}

// ccustom hook
export function useForm(){
    return useContext(FormContext)
}