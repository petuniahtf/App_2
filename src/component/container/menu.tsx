import React from "react";

type MenuContainerProps={
    children : React.ReactNode
}

const Menu = ({children}: MenuContainerProps) =>{
    return  <div className="container__menu">{children}</div>
    
}


export default Menu;