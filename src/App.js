import React from 'react';
import { Header } from "./components/layout/Header";
import { Content } from "./components/layout/Content";
import { ProjectsProvider, SelectedProjectProvider } from './components/context';


export const App = () => (
  <SelectedProjectProvider>
    <ProjectsProvider>
      <div className="App">
        <header className="header">
          <Header />
        </header>
        <div className="main">
          <Content />
        </div>
      </div>
    </ProjectsProvider>
   </SelectedProjectProvider>
);


export default App;
