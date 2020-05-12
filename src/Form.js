import React, {useState} from 'react';

const {formState, setFormState} = useState({
    name: '',
    email: '',
    password: '',
    terms: '',,
})

const inputValue = setFormState({...formState, [e.target.name]: e.target.value})

export default function Form(){

    return (
        <form value='something' onSubmit={e.preventDefault()}>
            <label htmlFor='name'>
                <input name='name' type='text' value={inputValue} onChange={(()=>something)} />
            </label>
            <label htmlFor='email'>
                <input name='email' type='email' value={inputValue} onChange={(()=>something)} />
            </label>
            <label htmlFor='password'>
                <input name='password' type='password' value={inputValue} onChange={(()=>something)} />
            </label>
            <label htmlFor='terms'>
                Terms and Services
                <input name='terms' type='checkbox' value={inputValue} onChange={(()=>something)} />
            </label>
            <button>Turn it in!</button>
        </form>
    )
}