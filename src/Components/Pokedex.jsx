import React from 'react'
import './pokedex.css'
const Pokedex = ({ name, image, index, type, weight, height,ability }) => {
    const style = `card ${type}`
    return (
        <div className="container">
            <div className={style}>
                <div className="front">
                <img src={image} alt={name}/>
                <div className='name'>{name}</div>
                </div>
                <div className="back">
                    {index<10?`#00${index}`:`#0${index}`}
                    <div>Type:{type[0].type.name}</div>
                    <div>Weight:{weight}</div>
                    <div>Height:{height}</div>
                    <div>Ability:{ability.map((el,id)=>(<span key={id}>{el.ability.name}, </span>))}etc..</div>
                </div>
            </div>
        </div>
    )
}

export default Pokedex
