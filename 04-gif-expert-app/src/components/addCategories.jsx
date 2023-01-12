import React, { useState } from 'react'

export const AddCategories = ({ setCategories }) => {

    const [inputValue, seTinputValue] = useState('onePush')

    const onInputChange = ({ target }) => {

        seTinputValue(target.value)

    }

    const onSubmit = (event) => {
        event.preventDefault()
        if (inputValue.trim().length < 1) {

            return

        }
        setCategories((categories) => [inputValue, ...categories])
        seTinputValue("")
    }





    return (



        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder='Buscar Gif'
                value={inputValue}
                onChange={onInputChange} />

                <div>
                    <br/>
                </div>

            <button onClick={inputValue}>Agregar</button>

        </form>

    )

}