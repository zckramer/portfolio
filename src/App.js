import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import AboutMe from './components/AboutMe.jsx';
import MyProjects from './components/MyProjects.jsx';
import ContactMe from './components/ContactMe.jsx';
import BackgroundPattern from '../src/images/Subtle-Dots-White-Tileable-pattern.jpg';

function App() {
  const [content, setContent] = React.useState(<Home />)
  
  function gotoHome(event) {
    event.preventDefault();
    setContent(<Home />)
  }

  function gotoMyProjects(event) {
    event.preventDefault();
    setContent(<MyProjects />);
  }
  
  function gotoContactMe(event) {
    event.preventDefault();
    setContent(<ContactMe />);
  }
  
  function gotoAboutMe(event) {
    event.preventDefault();
    setContent(<AboutMe />)
  }

  return (
    <div className="App">
      <Header gotoHome={gotoHome} gotoAboutMe={gotoAboutMe} gotoMyProjects={gotoMyProjects} gotoContactMe={gotoContactMe}/>
      <div className="Main" style={{backgroundImage:`url(${BackgroundPattern})`}}>
        {content}
      </div>
    </div>
  );
}

export default App;
