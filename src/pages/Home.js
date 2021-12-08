import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/footer'
import logoBranca from '../images/logoBranca.png'
import positivePeopleFood from "../images/positivePeopleFood.png"
import picole from '../images/picole.png'
import { searchNameR } from '../services/FakeBackEnd';

console.log(searchNameR("Salsicha"));

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <div name="Navbar" className="w-full h-14 px-16 bg-lifoo-200 flex justify-between">
        <img className="h-10 self-center" src={logoBranca} alt="logo lifoo branca" />
        <div className="flex">
        <button className="text-md text-white mr-10"><a href="#">Home</a></button>
        <button className="text-md text-white mr-10">Sobre</button>
        <button className="text-md text-white mr-10">Contato</button>
        <button onClick={() => { navigate("/signup") }} className="self-center w-52 h-9 bg-white text-lifoo-100 rounded-2xl text-md pl-3"><img className="-mt-1 -mb-7 h-8" src={picole} alt="picolé mascote"></img><b>Cadastre seu perfil</b></button>
        </div>
      </div>
      <div name="MainDiv" className="w-full py-16 bg-white grid grid-cols-2">
        <div className="-ml-48 place-self-center">
          <p className="text-lifoo-100 text-5xl mb-10"><b>Ajude a reduzir<br /> a fome no<br /> mundo!</b></p>
          <button className="w-48 h-11 bg-lifoo-100 rounded-3xl text-white text-sm mr-20"><b>Quero ajudar!</b></button>
        </div>
        <div className="">
          <img className="-ml-10" src={positivePeopleFood} alt="Foto de pessoas reciclando comida"></img>
        </div>
      </div>
      <div name="About" className="py-28 bg-gradient-to-r from-lifoo-100 to-lifoo-300 grid grid-cols-2">
        <div className="place-self-center">
          <p className="text-white mb-12">
            <b className="text-4xl">O que é a</b><img className="h-11 mt-4 -mb-11" src={logoBranca} alt="logo lifoo branca"></img><b className="text-4xl ml-36">?</b>
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
          Por que entrar<br /> para a Lifoo?
        </b>
        <div className="flex flex-row justify-evenly">
          <div className="flex flex-wrap border bg-lifoo-100 h-56 w-1/5 border-white rounded-full pt-6">
            <b className="text-7xl text-white opacity-20 ml-10">01</b>
            <b className="text-white mt-2 text-2xl">Lorem<br /> impsum</b>
            <p className="text-white mx-10 text-md">
              Lorem impsum, lorem impsum, lorem impsum, lorem impsum, lorem impsum, lorem impsum, lorem impsum.
            </p>
          </div>
          <div className="flex flex-wrap border bg-lifoo-100 h-56 w-1/5 border-white rounded-full pt-6">
            <b className="text-7xl text-white opacity-20 ml-10">02</b>
            <b className="text-white mt-2 text-2xl">Lorem<br /> impsum</b>
            <p className="text-white mx-10 text-md">
              Lorem impsum, lorem impsum, lorem impsum, lorem impsum, lorem impsum, lorem impsum, lorem impsum.
            </p>
          </div>
          <div className="flex flex-wrap border bg-lifoo-100 h-56 w-1/5 border-white rounded-full pt-6">
            <b className="text-7xl text-white opacity-20 ml-10">03</b>
            <b className="text-white mt-2 text-2xl">Lorem<br /> impsum</b>
            <p className="text-white mx-10 text-md">
              Lorem impsum, lorem impsum, lorem impsum, lorem impsum, lorem impsum, lorem impsum, lorem impsum.
            </p>
          </div>
          <div className="flex flex-wrap border bg-lifoo-100 h-56 w-1/5 border-white rounded-full pt-6">
            <b className="text-7xl text-white opacity-20 ml-10">04</b>
            <b className="text-white mt-2 text-2xl">Lorem<br /> impsum</b>
            <p className="text-white mx-10 text-md">
              Lorem impsum, lorem impsum, lorem impsum, lorem impsum, lorem impsum, lorem impsum, lorem impsum.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
