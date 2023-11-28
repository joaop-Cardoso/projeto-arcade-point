import React from 'react';

function Imagem() {
    const imagemStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80vw',
        height: '80vh',
    };
    return (
        <div style={imagemStyle} >
            <img src='https://img.freepik.com/vetores-premium/item-de-8-bits-do-videogame-de-fliperama-pixel-art-em-fundo-branco_360488-220.jpg?w=360' style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </div>
    );
}

export default Imagem;