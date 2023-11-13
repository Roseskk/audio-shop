'use client'
import React, {createContext, useContext, useState} from "react";
import {FormikProps} from 'formik';

interface FormikContextValue {
    form: FormikProps<any> | undefined;
    setForm: React.Dispatch<React.SetStateAction<FormikProps<any> | undefined>>;
}


export const FormikContext = createContext<FormikContextValue | undefined>(undefined)

export const FormikProvider: React.FC<any> = ({children}) => {
    const [form, setForm] = useState<FormikProps<any> | undefined>(undefined)
    return (
        <FormikContext.Provider value={{form, setForm}}>
            {children}
        </FormikContext.Provider>
    )
}

export const useFormikContext = () => {
    const context = useContext(FormikContext)
    if (!context) {
        throw new Error('You have to wrap CTX')
    }
    return context
}