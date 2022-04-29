import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Trending from './components/Trending';
import Superhero from './components/Superhero';


import "./style/landingpage.css"



function App() {
  return (
    <div>
      <div className='myBG'>
      {/* Navigation Section */}
        <NavigationBar/>
      {/* end Navigation */}

      {/* Intro Section */}
        <Intro/>
      </div>
      {/* end of intro */}


      {/* Trending Section */}
      <div className='trending'>
        <Trending/>
      </div>
      {/* end of Trending */}

      <div className='superhero'>
        <Superhero/>
      </div>


    </div>
  );
}

export default App;
