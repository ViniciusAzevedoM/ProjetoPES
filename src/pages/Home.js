import React from 'react';

function Home() {
  return (
    <div>
      <div name="navbar" className="w-full h-14 bg-lifoo-200 flex justify-end">
        <button className="text-sm text-white mr-10">Home</button>
        <button className="text-sm text-white mr-10">Sobre</button>
        <button className="text-sm text-white mr-10">Contato</button>
        <button className="self-center w-40 h-9 bg-white rounded-2xl text-sm mr-20">Cadastre seu perfil</button>
      </div>
      <div name="mainDiv" className="w-full h-96 bg-white flex flex-col flex-wrap justify-center">
        <div className="ml-28">
          <p className="text-lifoo-100 text-5xl mb-10"><b>Ajude a reduzir<br /> a fome no<br /> mundo!</b></p>
          <button className="w-48 h-11 bg-lifoo-100 rounded-3xl text-white text-sm mr-20"><b>Quero ajudar!</b></button>
        </div>
        <div className="w-2/3 h-full bg-black">
            <p className="text-3xl text-white">Inserir foto</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
