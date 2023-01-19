import React from "react";

const names : string[] = [ 'Site', 'Permis à point', 'Vidéo']

const ButtonMenu = () =>{
    return ( 
    <>
    {names.map((name, i)=>(<button className="menu__button" key={40+i}>{name}</button>))}
    </>
    )
}

export default ButtonMenu;