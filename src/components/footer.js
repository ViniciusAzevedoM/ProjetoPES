import React from 'react';
import logoVerde from '../images/logoVerde.png'

const Footer = () => {
    return (
        <div name="Footer" className="flex justify-center h-20 bg-white">
            <img className="h-8 mt-1 self-center" src={logoVerde} alt="logo lifoo branca" />
            <p className="self-center text-lifoo-100 ml-2 text-md">Copyright © 2021 Lifoo. Todos os direitos reservados.</p>
        </div>
    );
}

export default Footer