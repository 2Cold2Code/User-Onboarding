import React from 'react';

export default function Form(){

    return (
        <form value='something'>
            <label htmlFor='name'>
                <input name='name' type='text' value={} onChange={(()=>something)} />
            </label>
            <label htmlFor='email'>
                <input name='email' type='email' value={} onChange={(()=>something)} />
            </label>
            <label htmlFor='password'>
                <input name='password' type='password' value={} onChange={(()=>something)} />
            </label>
            <label htmlFor='terms'>
                Terms and Services
                <input name='terms' type='checkbox' value={} onChange={(()=>something)} />
            </label>
        </form>
    )
}