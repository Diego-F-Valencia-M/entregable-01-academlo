import React, { useState } from 'react';
import Quotes from '../Quotes.json';
import ButtonBox from './ButtonBox';

const getRandom = () => Math.floor(Math.random() * Quotes.length);

//Creo un array de colores
const colors = ["#ffa43a", "#ffbf75", "#759eff", "#75c7ff", "#525558", "#889EAF", "#D4B499", "#F3D5C0"]

const QuoteBox = () => {

    const [Quote, setQuote] = useState(Quotes[getRandom()]);

    const changeQuote = () => {
        const random = getRandom()
        setQuote(Quotes[random])
    }

    const color = colors[Math.floor(Math.random() * colors.length)];

    document.body.style = `background: ${color}`

    console.log(Quote)
    return (
        <div className="card">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bulb position-icon" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round" style={{fill: color}}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
            <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
            <line x1="9.7" y1="17" x2="14.3" y2="17" />
            </svg>
            <div className="text-cotain">
                <h3 style={{ color: color }}>
                    {Quote.quote}
                </h3>
                <p style={{ color: color }}>
                    {Quote.author}
                </p>
            </div>

            <ButtonBox changeQuote={changeQuote} color={color} />

        </div>
    )
}

export default QuoteBox