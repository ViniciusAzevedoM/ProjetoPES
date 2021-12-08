import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/footer'
import logoBranca from '../images/logoBranca.png'
import positivePeopleFood from "../images/positivePeopleFood.png"
import picole from '../images/picole.png'

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div name="Navbar" className="w-full h-14 px-16 bg-lifoo-200 flex justify-between">
        <img className="h-10 self-center" src={logoBranca} alt="logo lifoo branca" />
        <div className="flex">
        <button className="text-md text-white mr-10">Home</button>
        <button className="text-md text-white mr-10">Sobre</button>
        <button className="text-md text-white mr-10">Contato</button>
        <button onClick={() => { navigate("/signup") }} className="self-center w-44 h-9 bg-white text-lifoo-100 rounded-2xl text-md pl-3"><img className="-mt-1 -mb-7 h-8" src={picole} alt="picolé mascote"></img><b>Entre aqui!</b></button>
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
          <p className="text-white text-justify text-2xl">
            Somos uma startup que busca <b>te ajudar em<br />
            como reutilizar alimentos</b> não só para receitas,<br />
            mas também para <b>outros fins que você nem<br />
            sabia</b> que seria possível! <b>Assista ao vídeo</b> ao lado<br />
            para entender o problema que enfrentamos!<br />
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
            <b className="text-9xl opacity-5">01</b>
            <b className="text-2xl text-lifoo-100 -ml-44 mt-14">Crie sua conta</b> <b className="text-7xl text-lifoo-100 mt-8">&#8594;</b>
            <b className="text-9xl opacity-5">02</b>
            <b className="text-2xl text-lifoo-100 -ml-44 mt-14">Pesquise o alimento</b> <b className="text-7xl text-lifoo-100 mt-8">&#8594;</b>
            <b className="text-9xl opacity-5">03</b>
            <b className="text-2xl text-lifoo-100 -ml-44 mt-14">Escolha a reutilização</b>
          </div>
          <div className="flex justify-around mx-40">
            <b className="text-9xl opacity-5">04</b>
            <b className="text-2xl text-lifoo-100 -ml-44 mt-14">Aplique a reciclagem</b> <b className="text-7xl text-lifoo-100 mt-8">&#8594;</b>
            <b className="text-9xl opacity-5">05</b>
            <b className="text-2xl text-lifoo-100 -ml-44 mt-14">Veja seu histórico</b> <b className="text-7xl text-lifoo-100 mt-8">&#8594;</b>
            <b className="text-9xl opacity-5">06</b>
            <b className="text-2xl text-lifoo-100 -ml-44 mt-10">Perceba o quanto <br />impactou o mundo!</b>
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
            <b className="text-white mt-2 text-2xl">Impacto<br /> no mundo</b>
            <p className="text-white mx-10 text-md">
              Saiba o quanto você está impactando o mundo de acordo com nossas reutilizações.
            </p>
          </div>
          <div className="flex flex-wrap border bg-lifoo-100 h-56 w-1/5 border-white rounded-full pt-6">
            <b className="text-7xl text-white opacity-20 ml-10">02</b>
            <b className="text-white mt-2 text-2xl">Reciclagem<br /> inovadora</b>
            <p className="text-white mx-10 text-md">
              Utilize formas de reutilização de alimentos bem legais que você, possivelmente, não sabia.
            </p>
          </div>
          <div className="flex flex-wrap border bg-lifoo-100 h-56 w-1/5 border-white rounded-full pt-6">
            <b className="text-7xl text-white opacity-20 ml-10">03</b>
            <b className="text-white mt-2 text-2xl">Usabilidade<br /> simples</b>
            <p className="text-white mx-10 text-md">
              Tenha uma experiência simplificada em toda nossa plataforma.
            </p>
          </div>
          <div className="flex flex-wrap border bg-lifoo-100 h-56 w-1/5 border-white rounded-full pt-6">
            <b className="text-7xl text-white opacity-20 ml-10">04</b>
            <b className="text-white mt-2 text-2xl">Suporte<br /> qualificado</b>
            <p className="text-white mx-10 text-md">
              Tenha um contato direto com nossa equipe de especialistas, e saiba tudo sobre a lifoo.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
