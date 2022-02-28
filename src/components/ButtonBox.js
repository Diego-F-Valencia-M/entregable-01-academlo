import React from 'react';

const ButtonBox = ({changeQuote,color}) => {
    return (
        <button onClick={changeQuote} style={{ backgroundColor: color }}  >
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="60" height="60" viewBox="0 0 24 24" stroke-width="2.5" stroke="#145476" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="9 6 15 12 9 18" />
                </svg>
            </button>
    )
}

export default ButtonBox;