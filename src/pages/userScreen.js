import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRecycle, faHistory, faUser } from "@fortawesome/free-solid-svg-icons";
import logoVerde from '../images/logoVerde.png'

function UserScreen() {
    // function myFunction() {
    //     // Declare variables
    //     var input, filter, ul, li, a, i, txtValue;
    //     input = document.getElementById('searchFood');
    //     if (input != null) {
    //     filter = input.value.toUpperCase();
    //     }
    //     ul = document.getElementById("foods");
    //     li = ul.getElementsByTagName("li");
      
    //     // Loop through all list items, and hide those who don't match the search query
    //     for (i = 0; i < li.length; i++) {
    //       a = li[i].getElementsByTagName("a")[0];
    //       txtValue = a.textContent || a.innerText;
    //       if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //         li[i].style.display = "";
    //       } else {
    //         li[i].style.display = "none";
    //       }
    //     }
    //   }
    
    return (
        <div>
            <div className="h-full bg-lifoo-100 flex">
                <div name="Navbar" className="w-40 fixed h-screen bg-white flex flex-col flex-wrap content-center">
                    <img className="mt-10 h-10 self-center" src={logoVerde} alt="logo lifoo branca" />
                    <button className="mt-44 text-md text-lifoo-100"><FontAwesomeIcon className="mr-2" icon={faRecycle} /><b>Reutilizar</b></button>
                    <button className="mt-6 text-md text-lifoo-100"><FontAwesomeIcon className="mr-2" icon={faHistory} /><b>Histórico</b></button>
                    <button className="mt-6 text-md text-lifoo-100"><FontAwesomeIcon className="mr-2" icon={faUser} /><b>Perfil</b></button>
                    <button className="mt-44 w-28 h-9 bg-lifoo-100 text-white rounded-2xl text-md"><b>Sair</b></button>
                </div>
                <div className="ml-40 w-full h-screen bg-gray flex justify-center">
                    <div className="mt-10 w-1/2 h-96 rounded-lg bg-white">
                    <div className="h-10 flex justify-center">
                        <b className="text-md text-black self-center">Olá, nome_usuario!</b>
                    </div>
                    <div className="flex flex-col place-items-center">
                        <input type="text" id="searchFood" placeholder="Qual alimento quer reutilizar?" className="w-96 bg-white border"></input>
                        {/* <ul id="foods">
                            <li><a href="#">Adele</a></li>
                            <li><a href="#">Agnes</a></li>

                            <li><a href="#">Billy</a></li>
                            <li><a href="#">Bob</a></li>

                            <li><a href="#">Calvin</a></li>
                            <li><a href="#">Christina</a></li>
                            <li><a href="#">Cindy</a></li>
                        </ul> */}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserScreen;
