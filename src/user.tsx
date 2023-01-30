import React from 'react';
import './component/css/style.css'

import Vu from './component/container/Vu'
import Menu from './component/container/menu';
import ButtonMenu from './component/menu/buttonMenu';


const UserApp = ()=>{
  return (
    <>
     <Vu>
         <Menu>
           <ButtonMenu/>
         </Menu>
    </Vu>

    </>
  );
}

export default UserApp;