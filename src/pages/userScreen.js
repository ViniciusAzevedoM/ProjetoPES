import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRecycle, faHistory, faUser } from "@fortawesome/free-solid-svg-icons";
import { listAlimentos, listReceitas, searchName, searchNameR } from '../services/FakeBackEnd';
import paoVelho from '../images/paoVelho.jpg'
import logoVerde from '../images/logoVerde.png'
import aduboOrganico from '../images/aduboOrganico.png'

function UserScreen() {
    const navigate = useNavigate();

    // const [state, setState] = useState({});
    // const [name, setName] = useState('');

    // setState(searchName(name));

    return (
        <div>
            <div className="h-full bg-lifoo-100 flex">
                <div name="Navbar" className="w-40 fixed h-screen bg-white flex flex-col flex-wrap content-center">
                    <img className="mt-10 h-10 self-center" src={logoVerde} alt="logo lifoo branca" />
                    <button className="mt-44 text-md text-lifoo-100"><FontAwesomeIcon className="mr-2" icon={faRecycle} /><b>Reutilizar</b></button>
                    <button className="mt-6 text-md text-lifoo-100"><FontAwesomeIcon className="mr-2" icon={faHistory} /><b>Histórico</b></button>
                    <button className="mt-6 text-md text-lifoo-100"><FontAwesomeIcon className="mr-2" icon={faUser} /><b>Perfil</b></button>
                    <button onClick={() => { navigate("/") }} className="mt-44 w-28 h-9 bg-lifoo-100 text-white rounded-2xl text-md"><b>Sair</b></button>
                </div>
                <div className="ml-40 w-full h-full flex flex-col px-8">
                    <div className="mt-8 h-28 rounded-lg bg-white flex flex-col justify-center">
                        <div className="h-10 flex justify-center">
                            <b className="text-md text-lifoo-100 self-center">Olá, nome_usuario!</b>
                        </div>
                        <div className="flex flex-col place-items-center">
                            <input type="text" id="searchFood" placeholder="Qual alimento quer reutilizar?" className="w-96 bg-white border border-lifoo-100 rounded-lg"></input>
                        </div>
                    </div>
                    <div className="mt-10 rounded-t-lg bg-white flex flex-col">
                        <b className="mt-10 text-md text-lifoo-100 self-center">O que fazer com pão velho?</b>
                        <div className="mt-10 flex flex-col justify-center place-items-center">
                            <a href="https://www.receitasdeliciosasnamesa.com/2020/12/o-que-fazer-com-pao-velho.html" target="_blank" className='flex flex-col place-items-center'>
                                <img src={paoVelho} className="w-64 rounded-lg"></img>
                                <b className="text-md text-lifoo-100">Pão no forno</b>
                            </a>

                            <a href="https://homeopatiabrasil.com.br/como-fazer-adubo-organico-com-restos-de-alimentos/" target="_blank" className='flex flex-col mt-10 place-items-center'>
                                <img src={aduboOrganico} className="h-36 rounded-lg object-scale-down"></img>
                                <b className="text-md text-lifoo-100">Adubo Orgânico</b>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserScreen;
