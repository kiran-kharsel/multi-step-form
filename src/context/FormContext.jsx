import React, { createContext } from 'react';

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