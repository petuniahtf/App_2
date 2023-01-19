import React from "react";

type VuContainerProps = {
    children : React.ReactNode
}

const VuContainer = ({children}: VuContainerProps) =>{
    return <main className="container__main">{children}</main>
}


export default VuContainer;