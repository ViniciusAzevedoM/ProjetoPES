import React from 'react';
import Footer from '../components/footer'

function Home() {
  return (
    <div>
      <div name="Navbar" className="w-full h-20 bg-lifoo-200 flex justify-end">
        <button className="text-md text-white mr-10">Home</button>
        <button className="text-md text-white mr-10">Sobre</button>
        <button className="text-md text-white mr-10">Contato</button>
        <button className="self-center w-40 h-9 bg-white rounded-2xl text-md mr-20">Cadastre seu perfil</button>
      </div>
      <div name="MainDiv" className="w-full h-96 bg-white grid grid-cols-2">
        <div className="-ml-56 place-self-center">
          <p className="text-lifoo-100 text-5xl mb-10"><b>Ajude a reduzir<br /> a fome no<br /> mundo!</b></p>
          <button className="w-48 h-11 bg-lifoo-100 rounded-3xl text-white text-sm mr-20"><b>Quero ajudar!</b></button>
        </div>
        <div className="w-100% h-full -ml-40 bg-black">
          <p className="text-3xl text-white">Inserir foto</p>
        </div>
      </div>
      <div name="About" className="py-20 bg-gradient-to-r from-lifoo-100 to-lifoo-300 grid grid-cols-2">
        <div className="place-self-center">
          <p className="text-white text-5xl mb-10">
            <b>O que é a <br />Lifoo?</b>
          </p>
          <p className="text-white text-2xl">
            Lorem impsun, Lorem impsun, Lorem impsun,<br />
            Lorem impsun, Lorem impsun, Lorem impsun,<br />
            Lorem impsun, Lorem impsun, Lorem impsun,<br />
            Lorem impsun, Lorem impsun, Lorem impsun.<br />
          </p>
        </div>
        <div className="place-self-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/IN7JB0GtzHc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      <div name="Process" className="bg-white mt-20 mb-20">
        <div className="">
          <p className="text-lifoo-100 text-5xl ml-60 mb-20"><b>Entenda<br /> o processo</b></p>
          <div className="flex justify-around mx-40 mb-28">
            <b className="text-9xl opacity-10">01</b>
            <b className="text-9xl opacity-10">02</b>
            <b className="text-9xl opacity-10">03</b>
          </div>
          <div className="flex justify-around mx-40">
            <b className="text-9xl opacity-10">04</b>
            <b className="text-9xl opacity-10">05</b>
            <b className="text-9xl opacity-10">06</b>
          </div>
        </div>
      </div>
      <div name="WhyLifoo" className="py-20 bg-gradient-to-r from-lifoo-100 to-lifoo-300 flex flex-col justify-center">
        <b className="text-white text-center text-5xl mb-28">
          Por que entrar<br/> para a Lifoo?
        </b>
        <div className="flex flex-row justify-evenly">
          <div className="flex flex-wrap border bg-lifoo-100 h-56 w-1/5 border-white rounded-full pt-6">
            <b className="text-7xl text-white opacity-20 ml-10">01</b>
            <b className="text-white mt-2 text-2xl">Lorem<br/> impsum</b>
            <p className="text-white mx-10 text-md">
              Lorem impsum, lorem impsum, lorem impsum, lorem impsum, lorem impsum, lorem impsum, lorem impsum.
            </p>
          </div>
          <div className="flex flex-wrap border bg-lifoo-100 h-56 w-1/5 border-white rounded-full pt-6">
            <b className="text-7xl text-white opacity-20 ml-10">02</b>
            <b className="text-white mt-2 text-2xl">Lorem<br/> impsum</b>
            <p className="text-white mx-10 text-md">
              Lorem impsum, lorem impsum, lorem impsum, lorem impsum, lorem impsum, lorem impsum, lorem impsum.
            </p>
          </div>
          <div className="flex flex-wrap border bg-lifoo-100 h-56 w-1/5 border-white rounded-full pt-6">
            <b className="text-7xl text-white opacity-20 ml-10">03</b>
            <b className="text-white mt-2 text-2xl">Lorem<br/> impsum</b>
            <p className="text-white mx-10 text-md">
              Lorem impsum, lorem impsum, lorem impsum, lorem impsum, lorem impsum, lorem impsum, lorem impsum.
            </p>
          </div>
          <div className="flex flex-wrap border bg-lifoo-100 h-56 w-1/5 border-white rounded-full pt-6">
            <b className="text-7xl text-white opacity-20 ml-10">04</b>
            <b className="text-white mt-2 text-2xl">Lorem<br/> impsum</b>
            <p className="text-white mx-10 text-md">
              Lorem impsum, lorem impsum, lorem impsum, lorem impsum, lorem impsum, lorem impsum, lorem impsum.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
