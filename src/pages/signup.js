import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoBranca from '../images/logoBranca.png';

function SingUp() {
  const navigate = useNavigate();

  return (
    <main className="flex justify-center items-center flex-col w-full h-screen bg-gradient-to-r from-lifoo-100 to-lifoo-300">
      <section className="flex justify-around items-center flex-row h-4/6 w-full px-64">
        <fieldset className="flex justify-around items-center flex-col py-2 px-2 my-0 mx-6 h-full w-2/5">
          <form action="" className="w-full h-full flex flex-col items-start justify-center">
            <div className="flex flex-row justify-around items-center w-full">
              <span className="mb-4 border-b-2 border-white pb-2 text-white font-medium text-sm text-center mx-5" htmlFor="form">CADASTRO</span>
              <a onClick={() => { navigate("/") }} className="mb-4 border-b-2 border-white pb-2 text-white font-medium text-sm text-center" htmlFor="form">HOME</a>
            </div>
            <div className="flex flex-col w-full">
              <input className="placeholder:text-white outline-none w-full h-12 mb-8 bg-transparent text-lg px-3 text-white border-b-2 border-white" type="text" placeholder="User Name" name="User name"/>
              <input className="placeholder:text-white outline-none w-full h-12 mb-8 bg-transparent text-lg px-3 text-white border-b-2 border-white" type="text" placeholder="User Email" name="User email"/>
              <input className="placeholder:text-white outline-none w-full h-12 mb-4 bg-transparent text-lg px-3 text-white border-b-2 border-white" type="password" placeholder="Password" name="User password" id="" />
            </div>
            <div className="w-full flex items-center justify-start mb-4">
              <a href="" className="text-white text-xs font-medium">ESQUECI MINHA SENHA</a>
            </div>
            <div className="w-full flex items-center justify-center h-12">
              <button className="flex items-center justify-center bg-lifoo-200 h-full w-44 rounded-2xl text-white" type="submit">CADASTRAR</button>
            </div>
          </form>
        </fieldset>
        <fieldset className="flex justify-start items-center py-8 h-full flex-col">
          <img className="h-24 self-center mb-5" src={logoBranca} alt="logo lifoo branca" />
          <h1 className="text-white text-justify text-2xl">Ajude a reduzir <br/> a fome no mundo!</h1>
        </fieldset>
      </section>
    </main>
  );
}

export default SingUp;
