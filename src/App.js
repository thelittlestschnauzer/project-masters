import React from 'react';
import { Header } from "./components/layout/Header";
import { Content } from "./components/layout/Content";


export const App = () => {
  return (
   <div className="App">
     <header className="header">
       <Header />
     </header>
     <div className="main">
       <Content />
       
     </div>
   </div>
  );
}

export default App;
