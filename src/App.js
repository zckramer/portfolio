import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import AboutMe from './components/AboutMe.jsx';
import MyProjects from './components/MyProjects.jsx';
import ContactMe from './components/ContactMe.jsx';

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
    setContent(<ContactMe  gitHub={openGitHub} linkedIn={openLinkedIn}/>);
  }
  
  function gotoAboutMe(event) {
    event.preventDefault();
    setContent(<AboutMe />)
  }

  function openGitHub() {
    const win = window.open('https://github.com/zckramer');
    win.focus();
  }

  function openLinkedIn() {
    const win = window.open('https://www.linkedin.com/in/zckramer/');
    win.focus();
  }

  return (
    <div className="App">
      <Header gotoHome={gotoHome} gotoAboutMe={gotoAboutMe} gotoMyProjects={gotoMyProjects} gotoContactMe={gotoContactMe}/>
      <div className="Main">
        {content}
      </div>
    </div>
  );
}

export default App;
