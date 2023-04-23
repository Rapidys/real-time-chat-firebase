import {useState} from "react";


function useInput(initialValues,validatedSchema) {
    const [value, setValue] = useState(initialValues)
    const [error, setError] = useState({})
    const [touched, setTouched] = useState({})

    const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const numberReg = /^\d+$/
    const stringReg = /^[a-zA-Z]+$/



    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]:e.target.value
        })
    }

    const checkValidationType = (name) => {
        if(validatedSchema[name]?.email) return !emailReg.test(value[name])
        if(validatedSchema[name]?.number) return !numberReg.test(value[name])
        if(validatedSchema[name]?.string) return !stringReg.test(value[name])
    }

    const handleBlur = (e) => {
        const name = e.target.name
        if (value[name] === '' && validatedSchema[name]?.required) {
            setError({
                ...error,
                [name]: {
                    hasError:true,
                    type:'required',
                    message:validatedSchema[name] ? validatedSchema[name]?.required : ''
                }
            })
            return
        }
        if(validatedSchema[name]?.match && value[validatedSchema[name]?.match] !== value[name]){
            setError({
                ...error,
                [name]: {
                    hasError:true,
                    type:'notEqual',
                    message:validatedSchema[name] ? validatedSchema[name]?.notValid : ''
                }
            })
            return
        }
        if (checkValidationType(name) && validatedSchema[name]) {
            setError({
                ...error,
                [name]: {
                    hasError:checkValidationType(name),
                    type:'notValid',
                    message:validatedSchema[name] ? validatedSchema[name].notValid : ''
                }
            })
            return
        }
        if (value) {
            setError({
                ...error,
                [name]: {},
            })
        }
    }
    const handleFocus = (e) => {
        if (value === '') {
            setTouched({
                ...touched,
                [e.target.name]: true,
            })
        }
    }


    return {value, handleChange, handleBlur, error, handleFocus}

}

export default useInput
