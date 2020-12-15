import React from 'react';

function Header() {
    return (
        <header>
            <h1>CaldAr: Companies App</h1>
            <p>
                ID NAME ADDRESS EMAIL CUIT PHONE ACTIONS
                <button style={addStyle}>ADD +</button>
            </p>
        </header>
    )
}

const addStyle = {
    background: 'orangered',
    color: 'white',
    border: 'solid black 1px',
    marginRight: '15px',
    padding: '1px',
    borderRadius: '25%',
    float: 'right'
}

export default Header;