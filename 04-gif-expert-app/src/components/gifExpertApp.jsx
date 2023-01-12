import React, { useState } from 'react'
import '../style/style.css'
import { AddCategories } from './addCategories'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['onePunsh', 'Dagron Ball'])

    const onAddCategories = () => {

        // categories.push('Valorant')
        // setCategories([...categories, 'Valorant'])
        setCategories(cat => [...cat, 'valorant'])

    }

  return (
    <>

    <h1>Gif expert app</h1>

    <AddCategories setCategories= {setCategories}/>

    <ol>
        {categories.map(category => {
            return <li key={category}>{category}</li>
        })}
    </ol>
    
    </>
  )
}
 