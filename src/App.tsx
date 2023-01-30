import React from 'react';
import './component/css/style.css'
import { AuthContext, useAuth } from './component/context/context';
import UserApp from './user';

// import Vu from './component/container/Vu'
// import Menu from './component/container/menu';
// import ButtonMenu from './component/menu/buttonMenu';

type AppContainerProps={
  children : React.ReactNode
}

const App =({children} : AppContainerProps)=> {
  const { currentUser } = useAuth();
  return (
    <AuthContext.Provider value={currentUser}>
      <UserApp/>
    </AuthContext.Provider>
  );
}

export default App;
